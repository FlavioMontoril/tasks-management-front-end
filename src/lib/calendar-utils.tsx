import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    format,
    isSameMonth,
    isToday,
    addMonths,
    subMonths,
} from "date-fns"
import { ptBR } from "date-fns/locale"
import { isSameDay, isWithinInterval } from "date-fns"
import type { Task } from "../mock/tasks"

export { isSameMonth, isToday, format, startOfMonth, endOfMonth }

export function getMonthDays(date: Date): Date[] {
    const start = startOfWeek(startOfMonth(date), { locale: ptBR })
    const end = endOfWeek(endOfMonth(date), { locale: ptBR })
    return eachDayOfInterval({ start, end })
}


export function getTasksForDay(tasks: Task[], day: Date): Task[] {
    return tasks.filter(task =>
        isSameDay(task.dataCriacao, day)
    )
}

export function getTasksForRange(
    tasks: Task[],
    start: Date,
    end: Date
): Task[] {
    return tasks.filter(task =>
        isWithinInterval(task.dataCriacao, { start, end })
    )
}

export function formatTime(date: Date): string {
    return format(date, "h:mm a")
}

export function formatMonthYear(date: Date): string {
    return format(date, "MMMM yyyy", { locale: ptBR })
}

export function getDateRangeLabel(date: Date): string {
    return `${format(startOfMonth(date), "d 'de' MMM", { locale: ptBR })} - ${format(endOfMonth(date), "d 'de' MMM, yyyy", { locale: ptBR })}`
}

export function navigateMonth(
    date: Date,
    direction: "prev" | "next"
): Date {
    return direction === "next" ? addMonths(date, 1) : subMonths(date, 1)
}
