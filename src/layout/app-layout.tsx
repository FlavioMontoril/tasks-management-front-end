import { Outlet } from "react-router-dom";
import { useStopWatch } from "../store/useStopWatch";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowBigRightDash, MoveUp } from "lucide-react";
import { formatTimeSeconds } from "../lib/format-time-seconds";
import { DialogStopwatchButton } from "../components/common/dialog-stopwatch-button";
import { SidebarInset, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useSidebar } from "../components/ui/sidebar";
import { Separator } from "../components/ui/separator";
import { BreadcrumbSeparatorDemo } from "../components/common/breadcrumb-separator";

export default function AppLayout() {
  const { open, setOpen } = useSidebar();
  const { activeIssueId, elapsedSeconds, isRunning, tick } = useStopWatch();
  // const [minimized, setMinimized] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);
  // const { isRunning, tick } = useStopWatch();
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null,
  );

  //Alerta ao fechar ou atualizar a pagina
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isRunning) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isRunning]);

  // Permite que o contador progressivo continue em tempo real enquanto estiver play
  useEffect(() => {
    if (!isRunning) return; // só roda se estiver ativo

    const interval = setInterval(() => {
      tick(); // atualiza o tempo
    }, 1000);

    return () => clearInterval(interval); // cleanup ao desmontar (nunca vai desmontar enquanto AppLayout estiver ativo)
  }, [isRunning, tick]);

  return (
    <>
      <AppSidebar />
      <SidebarInset className="min-h-screen w-full flex flex-col bg-gray-900 transition-all duration-900 ease-in-out">
        <div
          className="flex items-center h-10 px-2 md:px-0"
        //   className="flex items-center h-10 "
        >
          <SidebarTrigger className="md:hidden mr-2 text-muted" />
          <Separator
            orientation="vertical"
            className="bg-muted-foreground !h-7"
          />
          <button
            title={open ? "Ocultar Menu" : "Exibir Menu"}
            onClick={() => setOpen(!open)}
            className="hidden md:flex text-muted-foreground items-center ml-3 cursor-pointer hover:text-white"
          //   className="text-muted-foreground flex items-center ml-3 cursor-pointer hover:text-white"
          >
            <ArrowBigRightDash
              size={20}
              className={`
                    transform-gpu
                    transition-transform
                    duration-500
                    ease-in-out
                    ${open ? "rotate-180" : "rotate-0"}    `}
            />
          </button>
          <div className="flex-1 flex justify-center">
            <BreadcrumbSeparatorDemo />
          </div>
        </div>

        <main
          className="flex-1 px-3 py-6  md:px-6 md:py-10 bg-slate-300 rounded-tl-2xl"
        // className="flex-1 px-3 py-10 bg-slate-300 rounded-tl-2xl"
        >
          <Outlet />
        </main>

        {activeIssueId && (
          <motion.button
            drag
            dragMomentum={false}
            onPointerDown={(e) => {
              setDragStart({ x: e.clientX, y: e.clientY });
            }}
            onPointerUp={(e) => {
              if (!dragStart) return;

              const dx = e.clientX - dragStart.x;
              const dy = e.clientY - dragStart.y;

              const distance = Math.hypot(dx, dy);

              if (distance < 6) {
                setOpenWindow(true);
              }
            }}
            className="fixed z-50 bottom-170 right-50 px-3 py-3 bg-black text-white cursor-grab active:cursor-grabbing rounded-full"
          >
            <span className="flex gap-2 items-center font-mono text-sm tabular-nums tracking-tight text-emerald-400">
              <MoveUp size={14} />
              {formatTimeSeconds(elapsedSeconds)}
            </span>
          </motion.button>
        )}

        <DialogStopwatchButton
          isView={openWindow}
          onChangeView={setOpenWindow}
        />
      </SidebarInset>
    </>
  );
}
