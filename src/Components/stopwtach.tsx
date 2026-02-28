import { useEffect } from "react";
import { Play, Pause, MoveUp } from "lucide-react";
import { useStopWatch } from "../store/useStopWatch";
import { formatTimeSeconds } from "../lib/format-time-seconds";

export function StopWatch() {

    const {
        activeIssueId,
        initialTime,
        elapsedSeconds,
        isRunning,
        startTimer,
        pauseTimer,
        tick,
    } = useStopWatch();


    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, tick]);

    const remainingTime = initialTime - elapsedSeconds;
    const workedTime = Math.max(0, elapsedSeconds);
    const minimumTime = workedTime >= 60;
    const progress = (remainingTime % 60) / 60;

    const handleStart = () => {

        if (!activeIssueId) return;
        // setOpenDialog(false);
        startTimer();
    };

    const handlePause = () => {
        if (!minimumTime) {
            // toast.warning("Tempo mínimo para registro é de 60s");
        }
        pauseTimer();
        // setOpenDialog(true);
    };


    const timeTextColorClass =
        remainingTime < 0
            ? "text-red-500"
            : isRunning
                ? "text-white"
                : "text-muted-foreground";

    return (
        <div className="flex flex-col gap-1 ml-28">
            <div className="flex items-center gap-3">
                {isRunning ? (
                    <div className="relative flex items-center justify-center w-7 h-7 shrink-0">
                        <svg className="w-6 h-6 -rotate-90">
                            <circle
                                cx="12"
                                cy="12"
                                r="11"
                                fill="none"
                                // stroke={
                                //     isRunning ? "var(--white)" : "var(--muted-foreground)"
                                // }
                                stroke="white"
                                // stroke={runningTime < 0 ? "var(--destructive)" : "var(--primary)"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray={11 * 2 * Math.PI}
                                strokeDashoffset={
                                    11 * 2 * Math.PI - progress * (11 * 2 * Math.PI)
                                }
                                style={{ transition: "stroke-dashoffset 0.4s ease-out" }}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={handlePause}
                                className="flex items-center justify-center h-6 w-6 rounded-md bg-warning text-white hover:opacity-90 transition-opacity active:scale-95"
                                aria-label="Pausar"
                            >
                                <Pause className="w-5 h-5" />
                            </button>
                        </span>
                    </div>
                ) : (
                    <button
                        onClick={handleStart}
                        className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-600 text-primary-foreground hover:opacity-90 transition-opacity active:scale-95"
                        aria-label="Iniciar"
                    >
                        <Play className="w-5 h-5" />
                    </button>
                )}
                {/* Time */}
                <div className="flex flex-col justify-center">
                    {/* Tempo restante (negativo = excedido) */}
                    <span
                        className={`font-mono text-lg tabular-nums tracking-tight ${timeTextColorClass}`}>
                        {formatTimeSeconds(remainingTime)}
                    </span>
                    {/* Tempo trabalhado */}
                    <span className="mr-2 flex gap-1 items-center font-mono text-lg tabular-nums tracking-tight text-emerald-500">
                        <MoveUp size={14} />
                        {formatTimeSeconds(workedTime)}
                    </span>
                </div>
            </div>
        </div>
    );
}