import { ListChevronsDownUp, Table2 } from "lucide-react"
import { Switch } from "../ui/switch"

interface SwitchDemoProps {
    isTableView: boolean
    onToggle: (value: boolean) => void
}


export function SwitchDemo({ isTableView, onToggle }: SwitchDemoProps) {
    return (
        <div className="flex items-center gap-2">
            <Table2 size={20} color="gray" />
            <Switch id="switch-focus-mode"
                checked={!isTableView}
                onCheckedChange={(checked) => onToggle(!checked)}
            />
            <ListChevronsDownUp size={20} color="gray" />
        </div>
    )
}
