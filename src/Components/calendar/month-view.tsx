import { format, isSameMonth, isToday } from "date-fns"
import { cn } from "../../lib/utils"
// import type { CalendarEvent } from "../../lib/calendar-types"
import { getMonthDays, getTasksForDay } from "../../lib/calendar-utils"
import type { Task } from "../../mock/tasks"
import { TaskBadge } from "./event-badge"

interface MonthViewProps {
    currentDate: Date
    tasks: Task[]
}

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

export function MonthView({ currentDate, tasks }: MonthViewProps) {
    const days = getMonthDays(currentDate)

    const weeks: Date[][] = []
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7))
    }

    return (
        <div className="flex flex-1 flex-col overflow-y-auto">
            {/* Weekday headers */}
            <div className="grid grid-cols-7 border-b border-border">
                {WEEKDAYS.map((day) => (
                    <div
                        key={day}
                        className="py-0.5 text-center text-xs font-medium text-muted-foreground"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Day cells */}
            <div className="grid flex-1 grid-cols-7 auto-rows-fr">
                {weeks.map((week, wi) =>
                    week.map((day, di) => {
                        const dayTasks = getTasksForDay(tasks, day)
                        const inMonth = isSameMonth(day, currentDate)
                        const today = isToday(day)
                        // const hidden = Math.max(0, dayTasks.length - MAX_VISIBLE)

                        return (
                            <div
                                key={`${wi}-${di}`}
                                className={cn(
                                    "flex min-h- flex-col border-b border-r border-border p-1",
                                    !inMonth && "bg-muted/30",
                                    di === 0 && "border-l"
                                )}
                            >
                                <span
                                    className={cn(
                                        "mb-1 flex size-7 items-center justify-center self-end rounded-full text-sm",
                                        today
                                            ? "bg-foreground font-semibold text-background"
                                            : inMonth
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                    )}
                                >
                                    {format(day, "d")}
                                </span>

                                <div className="flex flex-1 flex-col gap-0.5 overflow-hidden">
                                    {dayTasks.map((task) => (
                                        <TaskBadge key={task.id} task={task} />
                                    ))}
                                    {/* {hidden > 0 && (
                                        <span className="px-1.5 text-[11px] font-medium text-muted-foreground">
                                            +{hidden} mais...
                                        </span>
                                    )} */}
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
