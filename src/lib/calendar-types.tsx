import type { TaskStatus } from "../mock/tasks"

export interface CalendarTask {
    id: string
    codigo: string
    nome: string
    dataCriacao: string
    status: TaskStatus
}