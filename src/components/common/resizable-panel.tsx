import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";

import { useEffect, useState } from "react";
import { Text } from "./text";
import { SkeletonTable } from "../skeleton-table";
import { TableTask } from "../table-task";
import { AccordionTask } from "../accordion-task";
import { PaginationDemo } from "./pagination-demo";
import { useFilteredPagination } from "../../hooks/useFilteredPagination";
import type { Task } from "../../mock/tasks";
import TaskNode from "../task-node";
import { Button } from "../ui/button";
import { SheetCreateTask } from "../sheet-create-task";
import { EmptyTasks } from "../empty-task";
import { useTaskStore } from "../../store/use-task-store";
import { TaskToolbar } from "./task-toolbar";
import { useIsMobile } from "../../hooks/use-mobile";
import { useViewTasksModeStore } from "../../store/use-view-tasks-mode";

export function ResizablePanelView() {
  const {
    search,
    handleSearch,
    handleDateSearch,
    dateRange,
    page,
    paginatedData,
    setPage,
    totalPages,
  } = useFilteredPagination();

  const { isTableView } = useViewTasksModeStore();
  const { tasks } = useTaskStore();

  // const [isMobile, setIsMobile] = useState(false);
  const isMobile = useIsMobile();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false);
  // const [isTableView, setIsTableView] = useState(() => {
  //   const saved = localStorage.getItem("viewMode");
  //   return saved ? saved === "table" : true;
  // });

  const handleChangeSheet = () => {
    setIsOpenSheet(true);
  };

  // const handleToggle = (value: boolean) => {
  //   setIsTableView(value);
  //   localStorage.setItem("viewMode", value ? "table" : "accordion");
  // };

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);

  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [paginatedData]);

  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <EmptyTasks />
      </div>
    );
  }

  return (
    <>
      <ResizablePanelGroup
        orientation={isMobile ? "vertical" : "horizontal"}
        className="w-full h-full min-h-125 rounded-lg"

        // className="w-full rounded-lg"
        // orientation="horizontal"
        // className="min-h-50 w-full rounded-lg md:min-w-310 "
      >
        <ResizablePanel defaultSize={selectedTask ? 40 : 100}>
          <div className="flex h-full ">
            <div className="flex flex-col gap-6 h-full w-full">
              <div
                className="flex items-center gap-4 justify-between"
                // className="flex justify-between items-center"
              >
                <div className="space-x-3 flex items-center justify-center">
                  <Text
                    as="h1"
                    variant="muted"
                    className=" font-bold text-4xl text-muted-foreground"
                  >
                    Tasks   
                  </Text> 
                  <span className="mt-4 text-muted-foreground">{tasks.length} tarefas cadastradas</span>
                </div>
                <Button
                  onClick={() => handleChangeSheet()}
                  className="ml-auto "
                >
                  Cadastrar
                </Button>
                {/* <SwitchDemo isTableView={isTableView} onToggle={handleToggle} /> */}
              </div>
              <div className="flex flex-col flex-1 gap-3 min-h-0">
                <TaskToolbar
                  search={search}
                  dateRange={dateRange}
                  onSearch={handleSearch}
                  onDateChange={handleDateSearch}
                />
                {isTableView ? (
                  <div
                    className="max-h-120 mb-12 overflow-y-auto pr-1 "
                    // className="max-h-90 mb-12 overflow-y-auto pr-1 "
                  >
                    {isLoading ? (
                      <SkeletonTable />
                    ) : (
                      <>
                        <TableTask
                          onSelect={setSelectedTask}
                          tasks={paginatedData}
                        />
                      </>
                    )}
                  </div>
                ) : (
                  <div className="max-h-120 mb-12 overflow-y-auto pr-1">
                    <AccordionTask tasks={paginatedData} />
                  </div>
                )}
                {paginatedData.length <= 1 ||
                  (tasks.length > 10 && (
                    <PaginationDemo
                      currentPage={page}
                      onPageChange={setPage}
                      totalPages={totalPages}
                    />
                  ))}
              </div>
            </div>
          </div>
        </ResizablePanel>
        {selectedTask && (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60}>
              <div className="flex w-full h-full items-center justify-center p-6">
                <TaskNode
                  onClose={() => setSelectedTask(null)}
                  key={selectedTask.id}
                  task={selectedTask}
                />
              </div>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
      <SheetCreateTask onOpenChange={setIsOpenSheet} isOpen={isOpenSheet} />
    </>
  );
}
