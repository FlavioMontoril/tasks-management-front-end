import { tasks } from "../mock/tasks"
import { CheckCircle2, Clock, XCircle, ListTodo } from "lucide-react"
import { DashboardCard } from "../Components/dashboard-card"
import { StatusBadge } from "../Components/status-badge"
import type { ElementType } from "react"


interface CardProps {
    id: number,
    title: string,
    value: number,
    icon: ElementType,
    color?: "blue" | "green" | "yellow" | "red",
}
export default function Dashboard() {

    function countByStatus(status: string) {
        return tasks.filter(t => t.status === status).length
    }

    const total = tasks.length
    const open = countByStatus("Open")
    const progress = countByStatus("In Progress")
    const done = countByStatus("Done")
    const canceled = countByStatus("Canceled")


    const cardProps: CardProps[] = [
        { id: 1, title: "Total", value: total, icon: ListTodo },
        { id: 2, title: "Open", value: open, icon: Clock, color: "blue" },
        { id: 3, title: "In Progress", value: progress, icon: Clock, color: "yellow", },
        { id: 4, title: "Done", value: done, icon: CheckCircle2, color: "green" },
        { id: 5, title: "Canceled", value: canceled, icon: XCircle, color: "red" },
    ]

    const recentTasks = [...tasks]
        .sort((a, b) => b.dataCriacao.localeCompare(a.dataCriacao))
        .slice(0, 5)

    return (
        <div className="flex flex-col gap-3 w-full h-full overflow-hidden">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
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
            <div className="bg-muted/50 rounded-xl p-3 w-full flex flex-col flex-1 overflow-hidden">

                <h2 className="font-semibold mb-4">
                    Tarefas recentes
                </h2>

                <div className="flex flex-col gap-3 overflow-hidden">

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