interface Props {
    title: string
    value: number
    icon: React.ReactNode
    color?: "blue" | "green" | "yellow" | "red"
}

const colors = {
    blue: "text-blue-500 bg-blue-500/10",
    green: "text-green-500 bg-green-500/10",
    yellow: "text-yellow-500 bg-yellow-500/10",
    red: "text-red-500 bg-red-500/10",
}

export function DashboardCard({
    title,
    value,
    icon,
    color
}: Props) {

    return (
        <div className="bg-background border rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition">

            <div>

                <div className="text-sm text-muted-foreground">
                    {title}
                </div>

                <div className="text-2xl font-bold">
                    {value}
                </div>

            </div>

            <div className={`
        p-2 rounded-lg
        ${color ? colors[color] : "bg-muted"}
      `}>
                {icon}
            </div>

        </div>
    )
}