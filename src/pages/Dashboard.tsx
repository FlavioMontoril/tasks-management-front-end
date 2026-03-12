import { CheckCircle2, Clock, XCircle, ListTodo } from "lucide-react"
import { DashboardCard } from "../components/dashboard-card"
import { StatusBadge } from "../components/status-badge"
import type { ElementType } from "react"
import { useTaskStore } from "../store/use-task-store"
import { TaskStatus } from "../mock/tasks"


interface CardProps {
    id: number,
    title: string,
    value: number,
    icon: ElementType,
    color?: "blue" | "green" | "yellow" | "red",
}
export default function Dashboard() {

    const { tasks } = useTaskStore()

    function countByStatus(status: TaskStatus) {
        return tasks.filter(t => t.status === status).length
    }

    const total = tasks.length
    const open = countByStatus(TaskStatus.OPEN)
    const progress = countByStatus(TaskStatus.IN_PROGRESS)
    const done = countByStatus(TaskStatus.DONE)
    const canceled = countByStatus(TaskStatus.CANCELED)


    const cardProps: CardProps[] = [
        { id: 1, title: "Total", value: total, icon: ListTodo },
        { id: 2, title: "Open", value: open, icon: Clock, color: "blue" },
        { id: 3, title: "In Progress", value: progress, icon: Clock, color: "yellow", },
        { id: 4, title: "Done", value: done, icon: CheckCircle2, color: "green" },
        { id: 5, title: "Canceled", value: canceled, icon: XCircle, color: "red" },
    ]

    const recentTasks = [...tasks]
        .sort((a, b) => new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime())
        .slice(0, 6)

    return (
        <div className="flex flex-col gap-3 w-full overflow-y-auto md:overflow-hidden min-h-screen">

            {/* Header */}
            <div>
                <h1 className="text-3xl text-muted-foreground font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Visão geral das tarefas
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">

                {cardProps.map(card => (
                    <DashboardCard
                        key={card.id}
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                        color={card.color} />
                ))}

            </div>

            {/* Recent tasks */}
            <div className="bg-muted/50 rounded-xl p-3 w-full flex flex-col flex-1 overflow-y-auto md:overflow-hidden min-h-50 md:max-h-135 max-h-15">

                <h2 className="font-semibold mb-4">
                    Tarefas recentes
                </h2>

                <div className="flex flex-col gap-3 md:overflow-hidden">

                    {recentTasks.map(task => (
                        <div
                            key={task.id}
                            className="flex items-center justify-between p-3 rounded-lg shadow-2xs bg-gray-100 hover:bg-gray-200 transition"
                        >

                            <div>
                                <div className="font-medium">
                                    {task.codigo}
                                </div>

                                <div className="text-sm text-muted-foreground">
                                    {task.nome}
                                </div>
                            </div>

                            <StatusBadge status={task.status} />

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}