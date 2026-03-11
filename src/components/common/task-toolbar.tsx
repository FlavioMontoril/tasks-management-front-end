import { Search } from "lucide-react"
import { useFilteredPagination } from "../../hooks/useFilteredPagination"
import { Input } from "../ui/input"
import { DatePickerWithRange } from "./date-picker-with-range"

export function TaskToolbar() {
    const { handleSearch, handleDateSearch, search, dateRange } = useFilteredPagination()
    return (
        <>
            <div
                className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between"
            //  className="flex justify-between"
            >
                <div className="relative flex items-center">
                    <Search className="absolute ml-1" size={18} color="gray" />
                    <Input
                        onChange={handleSearch}
                        value={search}
                        className="w-full md:w-70 h-9 pl-7 bg-background"
                        // className="w-70 h-7 pl-7 bg-background"
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
        </>
    )
}