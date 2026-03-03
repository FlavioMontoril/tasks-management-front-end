import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Search } from "lucide-react";

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
import { Button } from "../ui/button";
import { SheetCreateTask } from "../sheet-create-task";

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
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false)
  const [isTableView, setIsTableView] = useState(() => {
    const saved = localStorage.getItem("viewMode");
    return saved ? saved === "table" : true;
  });

  const handleChangeSheet = () => {
    setIsOpenSheet(true)
  }

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


  return (
    <>
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-50 w-full rounded-lg md:min-w-310 "
      >
        <ResizablePanel defaultSize={selectedTask ? 40 : 100}>
          <div className="flex h-full ">
            <div className="flex flex-col space-y-20 w-full">
              <div className="flex justify-between items-center">
                <Text
                  as="h1"
                  variant="muted"
                  className=" font-bold text-4xl text-muted-foreground"
                >
                  Tasks
                </Text>
                <Button
                  onClick={() => handleChangeSheet()}
                  className="ml-auto mr-20"
                >
                  Cadastrar
                </Button>
                <SwitchDemo isTableView={isTableView} onToggle={handleToggle} />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="relative flex items-center">
                    <Search className="absolute ml-1" size={18} color="gray" />
                    <Input
                      onChange={handleSearch}
                      value={search}
                      className="w-70 h-7 pl-7 bg-background"
                      type="text"
                      placeholder="Pesquise pelo codigo ou nome..."
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
                  <div className="max-h-90 mb-12 overflow-y-auto pr-1 ">
                    {isLoading ? (
                      <SkeletonTable />
                    ) : (
                      <>
                        {console.log("paginatedData:", paginatedData)}
                        <TableTask
                          onSelect={setSelectedTask}
                          tasks={paginatedData}
                        />
                      </>
                    )}
                  </div>
                ) : (
                  <div className="max-h-90 mb-12 overflow-y-auto pr-1">
                    <AccordionTask tasks={paginatedData} />
                  </div>
                )}
                {paginatedData.length > 10 && (
                  <PaginationDemo
                    currentPage={page}
                    onPageChange={setPage}
                    totalPages={totalPages}
                  />
                )}
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
      <SheetCreateTask
        onOpenChange={setIsOpenSheet}
        isOpen={isOpenSheet}
      />
    </>
  );
}
