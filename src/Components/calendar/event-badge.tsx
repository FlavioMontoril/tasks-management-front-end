import { Info } from "lucide-react"
import type { Task } from "../../mock/tasks"


interface EventBadgeProps {
    task: Task
}

export function TaskBadge({ task }: EventBadgeProps) {

    function getColor() {
        switch (task.status) {
            case "Done":
                return "bg-green-100 text-green-700"
            case "In Progress":
                return "bg-blue-100 text-blue-700"
            case "Canceled":
                return "bg-red-100 text-red-700"
            default:
                return "bg-orange-100 text-orange-700"
        }
    }

    return (
        <div
            title=""
            className={`px-1.5 py-0.5 rounded text-xs truncate flex flex-col ${getColor()}`}>
            <div className="flex gap-3 justify-center items-center">
                <span>{task.codigo}</span>
                <span> {task.status}</span>
                <span title={task.nome}>
                    <Info className="ml-14 cursor-pointer" size={11} />
                </span>
            </div>

        </div>
    )
}