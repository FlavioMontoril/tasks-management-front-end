import { TableTask } from "../Components/table-task";
import { DatePickerWithRange } from "../Components/common/date-picker-with-range";
import { Input } from "../Components/ui/input";
import { Text } from "../Components/common/text";
import { Search } from "lucide-react";
import { useFilteredPagination } from "../hooks/useFilteredPagination";
import { PaginationDemo } from "../Components/common/pagination-demo";
import { useEffect, useState } from "react";
import { SkeletonTable } from "../Components/skeleton-table";
import { SwitchDemo } from "../Components/common/switch-demo";
import { AccordionTask } from "../Components/accordion-task";

export default function Home() {

    const { search, dateRange, handleDateSearch, handleSearch, page, paginatedData, setPage, totalPages } = useFilteredPagination()
    const [isLoading, setIsLoading] = useState(true)
    const [isTableView, setIsTableView] = useState(() => {
        const saved = localStorage.getItem("viewMode")
        return saved ? saved === "table" : true
    });


    const handleToggle = (value: boolean) => {
        setIsTableView(value)
        localStorage.setItem("viewMode", value ? "table" : "accordion")
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [paginatedData])

    return (

        <div className="flex flex-col space-y-20">
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
    )
}