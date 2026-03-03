import { endOfMonth, format, startOfMonth } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { formatMonthYear, getDateRangeLabel, getTasksForRange, navigateMonth } from "../../lib/calendar-utils"
import { MonthView } from "./month-view"
import { useTaskStore } from "../../store/use-task-store"

export function BigCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const { tasks } = useTaskStore()

    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(currentDate)
    const eventCount = getTasksForRange(tasks, monthStart, monthEnd).length

    return (
        <div className="flex w-full h-120 flex-col bg-background rounded-2xl overflow-hidden">
            {/* Header */}
            <header className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5">
                        <CalendarIcon className="size-4 text-muted-foreground " />
                        <span className="text-xs font-semibold uppercase text-muted-foreground">
                            {format(currentDate, "MMM")}
                        </span>
                    </div>

                    <div>
                        <h1 className="flex items-center gap-2 text-lg font-semibold capitalize text-foreground">
                            {formatMonthYear(currentDate)}
                            <span className="text-sm font-normal text-muted-foreground">
                                {eventCount} eventos
                            </span>
                        </h1>
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="size-6"
                                onClick={() =>
                                    setCurrentDate((d) => navigateMonth(d, "prev"))
                                }
                            >
                                <ChevronLeft className="size-3.5" />
                                <span className="sr-only">Mes anterior</span>
                            </Button>
                            <span className="text-xs text-muted-foreground">
                                {getDateRangeLabel(currentDate)}
                            </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="size-6"
                                onClick={() =>
                                    setCurrentDate((d) => navigateMonth(d, "next"))
                                }
                            >
                                <ChevronRight className="size-3.5" />
                                <span className="sr-only">Proximo mes</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent text-xs"
                    onClick={() => setCurrentDate(new Date())}
                >
                    Hoje
                </Button>
            </header>

            {/* Month grid */}
            <MonthView currentDate={currentDate} tasks={tasks} />
        </div>
    )
}
