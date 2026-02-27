import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Search, Timer } from "lucide-react";

import { useEffect, useState } from "react";
import { Text } from "./text";
import { SwitchDemo } from "./switch-demo";
import { Input } from "../ui/input";
import { DatePickerWithRange } from "./date-picker-with-range";
import { SkeletonTable } from "../skeleton-table";
import { TableTask } from "../table-task";
import { AccordionTask } from "../accordion-task";
import { PaginationDemo } from "./pagination-demo";
import { useFilteredPagination } from "../../hooks/useFilteredPagination";
import type { Task } from "../../mock/tasks";
import TaskNode from "../task-node";
import { FloatingWindow } from "./floating-window";
import { motion } from "framer-motion";
export function ResizablePanelView() {
  const {
    search,
    dateRange,
    handleDateSearch,
    handleSearch,
    page,
    paginatedData,
    setPage,
    totalPages,
  } = useFilteredPagination();

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [isTableView, setIsTableView] = useState(() => {
    const saved = localStorage.getItem("viewMode");
    return saved ? saved === "table" : true;
  });

  const [openWindow, setOpenWindow] = useState(false);
  const [minimized, setMinimized] = useState(false);

  // const handleSelectTask = (task: Task) => {
  //     setSelectedTask(task)
  // }

  const handleToggle = (value: boolean) => {
    setIsTableView(value);
    localStorage.setItem("viewMode", value ? "table" : "accordion");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [paginatedData]);

  console.log("Task Selected", selectedTask);

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-50 max-w-md rounded-lg md:min-w-450"
    >
      <ResizablePanel defaultSize={selectedTask ? 40 : 100}>
        <motion.button
          onClick={() => {
            setOpenWindow(true);
            setMinimized(false);
          }}
          className="px-3 py-3 bg-black text-white rounded-full hover:bg-black"
        >
          <Timer/>
        </motion.button>
        <div className="flex h-full p-6">
          <div className="flex flex-col space-y-20 w-full">
            <div className="flex justify-between items-center">
              <Text
                as="h1"
                variant="muted"
                className=" font-bold text-4xl text-muted-foreground"
              >
                Tasks
              </Text>
              <SwitchDemo isTableView={isTableView} onToggle={handleToggle} />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="relative flex items-center">
                  <Search className="absolute ml-1" size={18} color="gray" />
                  <Input
                    onChange={handleSearch}
                    value={search}
                    className="w-100 h-8 pl-7 bg-background"
                    type="text"
                    placeholder="Pesquise a tarefa pelo codigo ou nome..."
                  />
                </div>
                <div className="ml-5 text-muted-foreground">
                  <DatePickerWithRange
                    value={dateRange}
                    onChange={handleDateSearch}
                  />
                </div>
              </div>
              {isTableView ? (
                <div className="max-h-140 mb-16 overflow-y-auto pr-1">
                  {isLoading ? (
                    <SkeletonTable />
                  ) : (
                    <TableTask
                      onSelect={setSelectedTask}
                      tasks={paginatedData}
                    />
                  )}
                </div>
              ) : (
                <div className="max-h-140 mb-16 overflow-y-auto pr-1">
                  <AccordionTask tasks={paginatedData} />
                </div>
              )}
              <PaginationDemo
                currentPage={page}
                onPageChange={setPage}
                totalPages={totalPages}
              />
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
      <FloatingWindow
        open={openWindow}
        minimized={minimized}
        onClose={() => setOpenWindow(false)}
        onToggleMinimize={() => setMinimized((prev) => !prev)}
      />
    </ResizablePanelGroup>
  );
}
