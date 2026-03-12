import { Outlet, useLocation } from "react-router-dom";
import { useStopWatch } from "../store/useStopWatch";
import { ArrowBigRightDash } from "lucide-react";
import { SidebarInset, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useSidebar } from "../components/ui/sidebar";
import { Separator } from "../components/ui/separator";
import { BreadcrumbSeparatorDemo } from "../components/common/breadcrumb-separator";
import { DraggableStopwatch } from "../components/draggable-stopwatch";
import { SwitchDemo } from "../components/common/switch-demo";
import { useViewTasksModeStore } from "../store/use-view-tasks-mode";

export default function AppLayout() {
  const { open, setOpen } = useSidebar();
  const { activeIssueId } = useStopWatch();
  const { isTableView, setIsTableView } = useViewTasksModeStore();

  const { pathname } = useLocation();

  const handleToggle = (value: boolean) => {
    setIsTableView(value);
  };

  return (
    <>
      <AppSidebar />
      <SidebarInset className="p-3 h-screen w-full flex flex-col bg-slate-300 transition-all duration-900 ease-in-out relative overflow-hidden">
        <header
          className="flex items-center mx-3"
          //   className="flex items-center h-10 "
        >
          <SidebarTrigger className="md:hidden text-muted-foreground" />
          <button
            title={open ? "Ocultar Menu" : "Exibir Menu"}
            onClick={() => setOpen(!open)}
            className="hidden md:flex text-muted-foreground items-center cursor-pointer hover:text-white"
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
          <Separator orientation="vertical" className="bg-muted !h-7 mx-4" />
          {pathname === "/home" && (
            <>
              <SwitchDemo isTableView={isTableView} onToggle={handleToggle} />
              <Separator
                orientation="vertical"
                className="bg-muted !h-7 mx-4"
              />
            </>
          )}

          <div className="flex justify-center  w-full md:mr-44">
            <BreadcrumbSeparatorDemo />
          </div>
        </header>

        <main
          className="mx-3 flex-1 py-6 overflow-hidden md:py-32 bg-slate-300 "
          // className="flex-1 px-3 py-10 bg-slate-300 rounded-tl-2xl"
        >
          <Outlet />
        </main>

        {activeIssueId && <DraggableStopwatch id={activeIssueId} />}
      </SidebarInset>
    </>
  );
}
