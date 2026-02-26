export type TaskStatus = "Open" | "Done" | "Canceled" | "In Progress";

export interface Task {
    id: string;
    codigo: string;
    nome: string;
    dataCriacao: string;
    status: TaskStatus;
    timeSeconds: number;
}

export const tasks: Task[] = [
    { id: "1", codigo: "TASK-001", nome: "Criar layout inicial", dataCriacao: "2026-01-03", status: "Done", timeSeconds: 60 },
    { id: "2", codigo: "TASK-002", nome: "Implementar sidebar", dataCriacao: "2026-01-05", status: "In Progress", timeSeconds: 30 },
    { id: "3", codigo: "TASK-003", nome: "Configurar roteamento", dataCriacao: "2026-01-06", status: "Done", timeSeconds: 5400 },
    { id: "4", codigo: "TASK-004", nome: "Criar componente Header", dataCriacao: "2026-01-08", status: "Open", timeSeconds: 3600 },
    { id: "5", codigo: "TASK-005", nome: "Adicionar autenticação", dataCriacao: "2026-01-10", status: "Canceled", timeSeconds: 14400 },
    { id: "6", codigo: "TASK-006", nome: "Criar tabela de tarefas", dataCriacao: "2026-01-12", status: "In Progress", timeSeconds: 12600 },
    { id: "7", codigo: "TASK-007", nome: "Integrar API", dataCriacao: "2026-01-15", status: "Open", timeSeconds: 18000 },
    { id: "8", codigo: "TASK-008", nome: "Criar página Dashboard", dataCriacao: "2026-01-18", status: "Done", timeSeconds: 9000 },
    { id: "9", codigo: "TASK-009", nome: "Implementar filtros", dataCriacao: "2026-01-20", status: "Open", timeSeconds: 4800 },
    { id: "10", codigo: "TASK-010", nome: "Adicionar paginação", dataCriacao: "2026-01-22", status: "In Progress", timeSeconds: 13200 },
    { id: "11", codigo: "TASK-011", nome: "Criar formulário de tarefa", dataCriacao: "2026-01-25", status: "Done", timeSeconds: 7500 },
    { id: "12", codigo: "TASK-012", nome: "Validar formulário", dataCriacao: "2026-01-27", status: "Open", timeSeconds: 3600 },
    { id: "13", codigo: "TASK-013", nome: "Implementar edição", dataCriacao: "2026-01-28", status: "Canceled", timeSeconds: 16200 },
    { id: "14", codigo: "TASK-014", nome: "Implementar exclusão", dataCriacao: "2026-02-01", status: "Done", timeSeconds: 8400 },
    { id: "15", codigo: "TASK-015", nome: "Criar modal", dataCriacao: "2026-02-02", status: "In Progress", timeSeconds: 21600 },
    { id: "16", codigo: "TASK-016", nome: "Adicionar loading", dataCriacao: "2026-02-04", status: "Open", timeSeconds: 5400 },
    { id: "17", codigo: "TASK-017", nome: "Melhorar responsividade", dataCriacao: "2026-02-06", status: "Done", timeSeconds: 9600 },
    { id: "18", codigo: "TASK-018", nome: "Configurar tema escuro", dataCriacao: "2026-02-08", status: "Open", timeSeconds: 7200 },
    { id: "19", codigo: "TASK-019", nome: "Adicionar testes", dataCriacao: "2026-02-10", status: "Canceled", timeSeconds: 19800 },
    { id: "20", codigo: "TASK-020", nome: "Deploy da aplicação", dataCriacao: "2026-02-12", status: "In Progress", timeSeconds: 14400 },
    { id: "21", codigo: "TASK-021", nome: "Deploy da aplicação front-end", dataCriacao: "2026-02-12", status: "In Progress", timeSeconds: 10800 },
    { id: "22", codigo: "TASK-022", nome: "Deploy", dataCriacao: "2026-01-03", status: "Done", timeSeconds: 7200 },
    { id: "23", codigo: "TASK-023", nome: "Dayli", dataCriacao: "2025-12-31", status: "Canceled", timeSeconds: 10800 },


];