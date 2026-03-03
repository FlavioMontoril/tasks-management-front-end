import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TaskStatus, type Task } from "../mock/tasks";

type NewTaskInput = Omit<Task, "id" | "dataCriacao" | "status">;

interface TaskStore {
    tasks: Task[];
    addTask: (task: NewTaskInput) => void;
    deleteTask: (id: string) => void;
    clearTasks: () => void;
}

export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
            tasks: [],

            addTask: (task: NewTaskInput) => {
                set((state) => {
                    const existsTask = state.tasks.some(item => item.codigo === task.codigo);

                    const newTask: Task = {
                        id: crypto.randomUUID(),
                        codigo: task.codigo,
                        nome: task.nome,
                        dataCriacao: new Date(),
                        status: TaskStatus.OPEN,
                        timeSeconds: task.timeSeconds ?? 0,
                    };

                    if (existsTask) return state;
                    return { tasks: [...state.tasks, newTask] };
                });
            },
            deleteTask: (id: string) => {
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                }));
            },

            // 🔥 LIMPAR TUDO
            clearTasks: () => {
                set({ tasks: [] });
            },
        }),
        {
            name: "task-storage", // nome da key no localStorage
        }
    )
);