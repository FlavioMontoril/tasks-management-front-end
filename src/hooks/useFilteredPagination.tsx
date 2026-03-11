import { endOfDay, startOfDay } from "date-fns";
import { useMemo, useState, type ChangeEvent } from "react";
import type { DateRange } from "react-day-picker";
import { useTaskStore } from "../store/use-task-store";

export function useFilteredPagination() {
  const { tasks } = useTaskStore();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleDateSearch = (range: DateRange | undefined) => {
    setDateRange(range);
  };

  const filteredData = useMemo(() => {
    return tasks.filter((task) => {
      let matchText = true;
      if (search && search.length >= 3) {
        matchText =
          task.codigo
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          task.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      }

      let matchDate = true;
      if (dateRange?.from) {
        const taskDate = new Date(task.dataCriacao)

        const from = startOfDay(dateRange.from);
        const to = dateRange.to
          ? endOfDay(dateRange.to)
          : endOfDay(dateRange.from);

        matchDate = taskDate >= from && taskDate <= to;
      }
      return matchText && matchDate;
    });
  }, [search, dateRange, tasks]);

  // paginação
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;

    return filteredData.slice(start, end);
  }, [filteredData, page, itemsPerPage]);

  // reset automático quando filtros mudam
  const setPageSafe = (newPage: number) => {
    setPage(newPage);
  };

  const resetPage = () => {
    setPage(1);
  };

  return {
    page,
    setPage: setPageSafe,
    resetPage,
    handleSearch,
    search,
    filteredData,
    dateRange,
    setDateRange,
    handleDateSearch,
    paginatedData,

    totalPages,
    totalItems: filteredData.length,
  };
}
