import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { DatePickerWithRange } from "./date-picker-with-range";
import { DateRange } from "react-day-picker";

interface TaskToolbarProps {
  search: string;
  dateRange: DateRange | undefined;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (range: DateRange | undefined) => void;
}

export function TaskToolbar({
  search,
  dateRange,
  onSearch,
  onDateChange,
}: TaskToolbarProps) {
  return (
    <>
      <div
        className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between"
        //  className="flex justify-between"
      >
        <div className="relative flex items-center">
          <Search className="absolute ml-1" size={18} color="gray" />
          <Input
            value={search}
            onChange={onSearch}
            className="w-full md:w-70 h-7 pl-7 bg-background"
            // className="w-70 h-7 pl-7 bg-background"
            type="text"
            placeholder="Pesquise pelo codigo ou nome..."
          />
        </div>
        <div className="ml-5 text-muted-foreground">
          <DatePickerWithRange value={dateRange} onChange={onDateChange} />
        </div>
      </div>
    </>
  );
}
