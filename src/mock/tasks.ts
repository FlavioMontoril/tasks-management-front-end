export type TaskStatus = "Open" | "Done" | "Canceled" | "In Progress";

export interface Task {
    id: string;
    codigo: string;
    nome: string;
    dataCriacao: string;
    status: TaskStatus;
}

export const tasks: Task[] = [
    {
        id: "1",
        codigo: "TASK-001",
        nome: "Criar layout inicial",
        dataCriacao: "2026-01-03",
        status: "Done",
    },
    {
        id: "2",
        codigo: "TASK-002",
        nome: "Implementar sidebar",
        dataCriacao: "2026-01-05",
        status: "In Progress",
    },
    {
        id: "3",
        codigo: "TASK-003",
        nome: "Configurar roteamento",
        dataCriacao: "2026-01-06",
        status: "Done",
    },
    {
        id: "4",
        codigo: "TASK-004",
        nome: "Criar componente Header",
        dataCriacao: "2026-01-08",
        status: "Open",
    },
    {
        id: "5",
        codigo: "TASK-005",
        nome: "Adicionar autenticação",
        dataCriacao: "2026-01-10",
        status: "Canceled",
    },
    {
        id: "6",
        codigo: "TASK-006",
        nome: "Criar tabela de tarefas",
        dataCriacao: "2026-01-12",
        status: "In Progress",
    },
    {
        id: "7",
        codigo: "TASK-007",
        nome: "Integrar API",
        dataCriacao: "2026-01-15",
        status: "Open",
    },
    {
        id: "8",
        codigo: "TASK-008",
        nome: "Criar página Dashboard",
        dataCriacao: "2026-01-18",
        status: "Done",
    },
    {
        id: "9",
        codigo: "TASK-009",
        nome: "Implementar filtros",
        dataCriacao: "2026-01-20",
        status: "Open",
    },
    {
        id: "10",
        codigo: "TASK-010",
        nome: "Adicionar paginação",
        dataCriacao: "2026-01-22",
        status: "In Progress",
    },
    {
        id: "11",
        codigo: "TASK-011",
        nome: "Criar formulário de tarefa",
        dataCriacao: "2026-01-25",
        status: "Done",
    },
    {
        id: "12",
        codigo: "TASK-012",
        nome: "Validar formulário",
        dataCriacao: "2026-01-27",
        status: "Open",
    },
    {
        id: "13",
        codigo: "TASK-013",
        nome: "Implementar edição",
        dataCriacao: "2026-01-28",
        status: "Canceled",
    },
    {
        id: "14",
        codigo: "TASK-014",
        nome: "Implementar exclusão",
        dataCriacao: "2026-02-01",
        status: "Done",
    },
    {
        id: "15",
        codigo: "TASK-015",
        nome: "Criar modal",
        dataCriacao: "2026-02-02",
        status: "In Progress",
    },
    {
        id: "16",
        codigo: "TASK-016",
        nome: "Adicionar loading",
        dataCriacao: "2026-02-04",
        status: "Open",
    },
    {
        id: "17",
        codigo: "TASK-017",
        nome: "Melhorar responsividade",
        dataCriacao: "2026-02-06",
        status: "Done",
    },
    {
        id: "18",
        codigo: "TASK-018",
        nome: "Configurar tema escuro",
        dataCriacao: "2026-02-08",
        status: "Open",
    },
    {
        id: "19",
        codigo: "TASK-019",
        nome: "Adicionar testes",
        dataCriacao: "2026-02-10",
        status: "Canceled",
    },
    {
        id: "20",
        codigo: "TASK-020",
        nome: "Deploy da aplicação",
        dataCriacao: "2026-02-12",
        status: "In Progress",
    },
    {
        id: "21",
        codigo: "TASK-021",
        nome: "Deploy da aplicação front-end",
        dataCriacao: "2026-02-12",
        status: "In Progress",
    },
];