import { useEffect, useRef } from "react";
import { Play, Pause, MoveUp } from "lucide-react";
import { useStopWatch } from "../store/useStopWatch";
import { formatTimeSeconds } from "../lib/format-time-seconds";

export function StopWatch() {
    const {
        initialTime,
        runningTime,
        setRunningTime,
        isRunning,
        setIsRunning,
        startedAt,
    } = useStopWatch();

    const intervalRef = useRef<number | null>(null);

    // ✅ Ao montar (reload): recalcula segundos perdidos enquanto página estava fechada
    useEffect(() => {
        if (isRunning && startedAt) {
            const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
            setRunningTime((prev) => prev - elapsedSeconds);
        }
    }, []); // só roda uma vez ao montar

    // ✅ Decrementa 1 por segundo (segundos, não ms)
    useEffect(() => {
        if (!isRunning) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }

        intervalRef.current = window.setInterval(() => {
            setRunningTime((prev) => prev - 1); // ✅ -1 segundo
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning]);


    const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsRunning(true);
    };

    const handlePause = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        // ✅ calcula o tempo decorrido desde o início e atualiza o runningTime
        if (startedAt) {
            const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
            setRunningTime((prev) => prev - elapsedSeconds);
        }
        setIsRunning(false);
    };

    const absRunning = Math.abs(runningTime);
    const progress = (absRunning % 60) / 60; // ✅ segundos: módulo 60
    const workedTime = initialTime - runningTime; // ✅ tempo trabalhado em segundos


    const timeTextColorClass =
        runningTime < 0
            ? "text-red-500"
            : isRunning
                ? "text-foreground"
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
                                stroke={runningTime < 0 ? "var(--destructive)" : "var(--primary)"}
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
                                className="flex items-center justify-center h-6 w-6 rounded-md bg-warning text-warning-foreground hover:opacity-90 transition-opacity active:scale-95"
                                aria-label="Pausar"
                            >
                                <Pause className="w-5 h-5" />
                            </button>
                        </span>
                    </div>
                ) : (
                    <button
                        onClick={handleStart}
                        className="flex items-center justify-center h-6 w-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity active:scale-95"
                        aria-label="Iniciar"
                    >
                        <Play className="w-5 h-5" />
                    </button>
                )}

                <div className="flex flex-col justify-center">
                    {/* Tempo restante (negativo = excedido) */}
                    <span className={`font-mono text-lg tabular-nums tracking-tight ${timeTextColorClass}`}>
                        {runningTime < 0 ? "-" : ""}{formatTimeSeconds(absRunning)}
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