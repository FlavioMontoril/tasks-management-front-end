import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ClockProps {
    activeIssueId: string | null;
    initialTime: number;
    elapsedSeconds: number;
    isRunning: boolean;
    startDateTime: number | null;

    setActiveIssue: (issueKey: string, initialTime: number) => void;
    startTimer: () => void;
    pauseTimer: () => void;
    tick: () => void;
    reset: () => void;
}

export const useStopWatch = create<ClockProps>()(
    persist(
        (set, get) => ({
            activeIssueId: null,
            initialTime: 0,
            elapsedSeconds: 0,
            isRunning: false,
            startDateTime: null,

            setActiveIssue: (issueKey: string, initialTime: number) =>
                set({
                    activeIssueId: issueKey,
                    initialTime,
                    elapsedSeconds: 0,
                    startDateTime: null,
                    isRunning: false,
                }),

            startTimer: () => {
                const now = Date.now();
                const { activeIssueId, elapsedSeconds } = get();
                if (!activeIssueId) return;

                set({
                    isRunning: true,
                    startDateTime: now - elapsedSeconds * 1000, //continua com o tempo pausado
                    // startDateTime: now,
                    // elapsedSeconds: 0,
                });
            },

            pauseTimer: () => {
                const { startDateTime, isRunning } = get();

                if (isRunning && startDateTime) {
                    const elapsed = Math.floor((Date.now() - startDateTime) / 1000);
                    set({
                        // activeIssueId: null,
                        // initialTime: 0,
                        // elapsedSeconds: 0,
                        elapsedSeconds: elapsed, // salva o tempo atuals
                        isRunning: false,
                    });
                }
            },

            tick: () => {
                const { startDateTime, isRunning } = get();
                if (isRunning && startDateTime) {
                    const elapsed = Math.floor((Date.now() - startDateTime) / 1000);
                    set({ elapsedSeconds: elapsed });
                }
            },


            reset: () =>
                set({
                    activeIssueId: null,
                    isRunning: false,
                    elapsedSeconds: 0,
                    startDateTime: null,
                }),
        }),
        {
            name: "clock-storage",
            partialize: (state) => ({
                activeIssueId: state.activeIssueId,
                initialTime: state.initialTime,
                elapsedSeconds: state.elapsedSeconds,
                startDateTime: state.startDateTime,
                isRunning: state.isRunning,
            }),
        },
    ),
);
