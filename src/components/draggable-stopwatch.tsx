import { useDraggable } from "@dnd-kit/core";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { Stopwatch } from "./stopwatch";
import { X } from "lucide-react";
import { useStopWatch } from "../store/useStopWatch";

export function DraggableStopwatch({ id }: { id: string }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
    const { reset } = useStopWatch()
    // Estado para salvar posição atual
    const [position, setPosition] = useState({ x: 800, y: 60 });
    const [visible, setVisible] = useState(true);

    const ref = useRef<HTMLDivElement | null>(null);

    const handleCloseDraggable = () => {
        reset()
        setVisible(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();

            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;

            setPosition((prev) => ({
                x: Math.min(prev.x, maxX),
                y: Math.min(prev.y, maxY),
            }));
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!visible) return null;
    const style: CSSProperties = {
        position: "fixed", // permite definir top/left
        top: position.y,
        left: position.x,
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
        cursor: "grab",
    };

    const handlePointerUp = () => {
        if (!transform || !ref.current) return;

        const container = ref.current.parentElement;
        if (!container) return;

        //Pega tamanho real do layout, nao deixa draggable ultrapassar
        const elementRect = ref.current.getBoundingClientRect();

        const maxX = window.innerWidth - elementRect.width;
        const maxY = window.innerHeight - elementRect.height;

        setPosition((prev) => {
            const newX = prev.x + transform.x;
            const newY = prev.y + transform.y;

            return {
                x: Math.max(0, Math.min(newX, maxX)),
                y: Math.max(0, Math.min(newY, maxY)),
            };
        });
    };

    return (
        <>
            <div
                ref={(node) => {
                    setNodeRef(node);
                    ref.current = node;
                }}
                {...listeners}
                {...attributes}
                onPointerUp={handlePointerUp} // dispara quando solta
                style={style}
                className="w-44 h-16 bg-black rounded-2xl text-white flex items-center justify-center active:cursor-grabbing select-none z-99999"
            >
                <div className="flex mr-28">
                    <button
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={() => handleCloseDraggable()}
                        className="absolute top-1 right-1 text-gray-400 hover:text-white"
                    >
                        <X size={16} />
                    </button>
                    <Stopwatch />
                </div>
            </div>
        </>
    );
}
