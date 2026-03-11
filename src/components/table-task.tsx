import { Timer } from "lucide-react";
import type { Task } from "../mock/tasks"
import { useStopWatch } from "../store/useStopWatch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Button } from "./ui/button";
import { format } from "date-fns";

type TableTaskProps = {
    tasks?: Task[],
    onSelect?: (task: Task) => void;
}

export const TableTask = ({ tasks = [], onSelect }: TableTaskProps) => {
    const { setActiveIssue, isRunning, activeIssueId } = useStopWatch()

    const handleSelectTask = (e: React.MouseEvent<HTMLButtonElement>, id: string, time: number) => {
        e.stopPropagation()
        setActiveIssue(id, time)
    }

    return (
        <Table className="w-full table-auto border border-border rounded-xl overflow-hidden">
            <TableHeader>
                <TableRow className="h-14 bg-muted border-white">
                    <TableHead className="w-10 text-xl font-bold">Código</TableHead>
                    <TableHead className="pl-10">Nome</TableHead>
                    <TableHead>Criado em</TableHead>
                    <TableHead className="w-37.5">Status</TableHead>
                    <TableHead className="w-45">Start</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks?.map((item) =>
                    <TableRow
                        key={item.id}
                        className={activeIssueId && activeIssueId === item.id ? "bg-gray-50 border-l-4 border-blue-400 opacity-25 cursor-pointer border-b-white " : "h-12 border-white cursor-pointer"}
                        onClick={() => { onSelect?.(item) }
                        }
                    >
                        <TableCell className="font-medium">{item.codigo}</TableCell>
                        <TableCell className="pl-10">{item.nome}</TableCell>
                        <TableCell>{format(new Date(item.dataCriacao), "dd/MM/yyyy HH:mm")}</TableCell>
                        <TableCell>{item.status}</TableCell>
                        <TableCell className="w-45">
                            {!isRunning && (
                                <Button
                                    variant={"ghost"}
                                    onClick={(e) => handleSelectTask(e, item.id, item.timeSeconds!)} >
                                    <Timer color="gray" />
                                </Button>
                            )}
                        </TableCell>

                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}