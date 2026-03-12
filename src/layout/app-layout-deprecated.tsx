import { Outlet } from "react-router-dom";
import { useStopWatch } from "../store/useStopWatch";
import { ArrowBigRightDash } from "lucide-react";
import { SidebarInset, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useSidebar } from "../components/ui/sidebar";
import { Separator } from "../components/ui/separator";
import { BreadcrumbSeparatorDemo } from "../components/common/breadcrumb-separator";
import { DraggableStopwatch } from "../components/draggable-stopwatch";

export default function AppLayout() {
  const { open, setOpen } = useSidebar();
  const { activeIssueId } = useStopWatch();

  return (
    <>
      <AppSidebar />
      <SidebarInset className="min-h-screen w-full flex flex-col bg-gray-900 transition-all duration-900 ease-in-out relative">
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
          <DraggableStopwatch id={activeIssueId} />
        )}
      </SidebarInset>
    </>
  );
}
