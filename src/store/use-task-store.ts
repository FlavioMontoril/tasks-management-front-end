import { create } from "zustand"
import type { Task } from "../mock/tasks";

interface TaskStore {
    tasks: Task[];
    setTask: (task: Task) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],

    setTask: (task: Task) => {

        set((state) => {
            const existsTask = state.tasks.some(item => item.id === task.id);

            if (existsTask) return state;
            return { tasks: [...state.tasks, task] }
        })
    },

}))