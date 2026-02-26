import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StopWatchProps {
    id: string;
    time: number; // em SEGUNDOS
}

interface StopWatchStore {
    taskId: string | null;
    initialTime: number;       // segundos
    runningTime: number;       // segundos, pode ser negativo
    isView: boolean;
    isRunning: boolean;
    startedAt: number | null;  // timestamp ms (Date.now())

    setToggleClock: (data: StopWatchProps) => void;
    setRunningTime: (timeRunning: number | ((prev: number) => number)) => void;
    setIsRunning: (running: boolean) => void;
    reset: () => void;
}

export const useStopWatch = create<StopWatchStore>()(
    persist(
        (set) => ({
            taskId: null,
            initialTime: 0,
            runningTime: 0,
            isView: false,
            isRunning: false,
            startedAt: null,

            setToggleClock: (data: StopWatchProps) =>
                set({
                    taskId: data.id,
                    initialTime: data.time,
                    runningTime: data.time,
                    isView: !!data.id,
                    isRunning: false,
                    startedAt: null,
                }),

            setRunningTime: (time) =>
                set((state) => ({
                    runningTime:
                        typeof time === "function" ? time(state.runningTime) : time,
                })),

            setIsRunning: (running: boolean) =>
                set({

                    isRunning: running,
                    startedAt: running ? Date.now() : null,
                }),

            reset: () =>
                set({
                    taskId: null,
                    initialTime: 0,
                    runningTime: 0,
                    isView: false,
                    isRunning: false,
                    startedAt: null,
                }),
        }),
        {
            name: "stopwatch-storage",
            partialize: (state) => ({
                taskId: state.taskId,
                initialTime: state.initialTime,
                runningTime: state.runningTime,
                isView: state.isView,
                isRunning: state.isRunning,
                startedAt: state.startedAt,
            }),
        }
    )
);