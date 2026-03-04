import { Info } from "lucide-react"
import { TaskStatus, type Task } from "../../mock/tasks"


interface EventBadgeProps {
    task: Task
}

export function TaskBadge({ task }: EventBadgeProps) {

    function getColor() {
        switch (task.status) {
            case TaskStatus.DONE:
                return "bg-green-100 text-green-700"
            case TaskStatus.IN_PROGRESS:
                return "bg-blue-100 text-blue-700"
            case TaskStatus.CANCELED:
                return "bg-red-100 text-red-700"
            default:
                return "bg-orange-100 text-orange-700"
        }
    }

    return (
        <div
            title=""
            className={`px-1.5 py-0.5 rounded text-xs truncate flex flex-col ${getColor()}`}>
            <div className="flex gap-3 justify-between items-center">
                <div>
                    <span>{task.codigo} - </span>
                    <span> {task.status}</span>
                </div>
                <div>
                    <span title={task.nome}>
                        <Info className="cursor-pointer" size={11} />
                    </span>
                </div>
            </div>

        </div>
    )
}