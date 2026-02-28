import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { useStopWatch } from "../store/useStopWatch";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoveUp } from "lucide-react";
import { formatTimeSeconds } from "../lib/format-time-seconds";
import { DialogStopwatchButton } from "../Components/common/dialog-stopwatch-button";

export default function AppLayout() {

    const { activeIssueId, elapsedSeconds, isRunning, tick } = useStopWatch()
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
                event.preventDefault()
                event.returnValue = ""
            }
        }

        window.addEventListener("beforeunload", handleBeforeUnload)

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
        }
    }, [isRunning])

    // Permite que o contador progressivo continue em tempo real enquanto estiver play
    useEffect(() => {
        if (!isRunning) return; // só roda se estiver ativo

        const interval = setInterval(() => {
            tick(); // atualiza o tempo
        }, 1000);

        return () => clearInterval(interval); // cleanup ao desmontar (nunca vai desmontar enquanto AppLayout estiver ativo)
    }, [isRunning, tick]);

    return (
        <div className="flex h-screen bg-gray-300 overflow-hidden">
            {/* <SideBar /> */}
            <div className=" flex-1 flex flex-col">
                <Header />
                <main className="flex-1 px-20.5 w-full">
                    <div className=" py-10 ">
                        <Outlet />
                    </div>
                </main>
                <div>
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
                                    // setMinimized(false);
                                }
                            }}
                            className="fixed z-50 bottom-155 left-300 px-3 py-3 bg-black text-white cursor-grab active:cursor-grabbing rounded-full"
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
                </div>
            </div>
        </div>
    )
}