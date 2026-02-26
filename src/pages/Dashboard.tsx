import { tasks } from "../mock/tasks"
import { CheckCircle2, Clock, XCircle, ListTodo } from "lucide-react"
import { DashboardCard } from "../Components/dashboard-card"
import { StatusBadge } from "../Components/status-badge"

function countByStatus(status: string) {
    return tasks.filter(t => t.status === status).length
}

export default function Dashboard() {
    const total = tasks.length
    const open = countByStatus("Open")
    const progress = countByStatus("In Progress")
    const done = countByStatus("Done")
    const canceled = countByStatus("Canceled")

    const recentTasks = [...tasks]
        .sort((a, b) => b.dataCriacao.localeCompare(a.dataCriacao))
        .slice(0, 5)

    return (
        <div className="flex flex-col gap-6 p-6">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Visão geral das tarefas
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                <DashboardCard
                    title="Total"
                    value={total}
                    icon={<ListTodo />}
                />

                <DashboardCard
                    title="Open"
                    value={open}
                    icon={<Clock />}
                    color="blue"
                />

                <DashboardCard
                    title="In Progress"
                    value={progress}
                    icon={<Clock />}
                    color="yellow"
                />

                <DashboardCard
                    title="Done"
                    value={done}
                    icon={<CheckCircle2 />}
                    color="green"
                />

                <DashboardCard
                    title="Canceled"
                    value={canceled}
                    icon={<XCircle />}
                    color="red"
                />

            </div>

            {/* Recent tasks */}
            <div className="bg-background border-none rounded-xl p-4">

                <h2 className="font-semibold mb-4">
                    Tarefas recentes
                </h2>

                <div className="flex flex-col gap-3">

                    {recentTasks.map(task => (
                        <div
                            key={task.id}
                            className="flex items-center justify-between p-3 rounded-lg shadow-2xl hover:bg-gray-200 transition"
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