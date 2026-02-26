import { Timer } from "lucide-react";
import type { Task } from "../mock/tasks"
import { useStopWatch } from "../store/useStopWatch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Button } from "./ui/button";
import { StopWatch } from "./stopwtach";

type TableTaskProps = {
    tasks: Task[],
    onSelect: (task: Task) => void;
}


export const TableTask = ({ tasks, onSelect }: TableTaskProps) => {
    const { setToggleClock, isView, taskId } = useStopWatch()

    console.log("isView", isView)

    const handleSelectTask = (e: React.MouseEvent<HTMLButtonElement>, id: string, time: number) => {
        console.log("Chamou função", id, time)
        e.stopPropagation()
        setToggleClock({ id: id, time: time })
    }

    return (
        <Table className="w-full border border-border rounded-xl overflow-hidden">
            <TableHeader>
                <TableRow className="h-14 bg-muted border-white">
                    <TableHead className="w-10 text-xl font-extrabold">Código</TableHead>
                    <TableHead className="pl-10">Nome</TableHead>
                    <TableHead>Criado em</TableHead>
                    <TableHead className="w-37.5">Status</TableHead>
                    <TableHead className="w-45">Start</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((item) =>
                    <TableRow
                        key={item.id}
                        className="h-16 border-white cursor-pointer"
                        onClick={() => { onSelect(item) }
                        }
                    >
                        <TableCell className="font-medium">{item.codigo}</TableCell>
                        <TableCell className="pl-10">{item.nome}</TableCell>
                        <TableCell>{item.dataCriacao}</TableCell>
                        <TableCell>{item.status}</TableCell>
                        <TableCell className="w-45">
                            <div className="flex justify-center items-center gap-2 min-h-10">
                                {isView && item.id === taskId ? (
                                    <StopWatch />
                                ) : (
                                    <Button
                                        variant={"ghost"}
                                        onClick={(e) => handleSelectTask(e, item.id, item.timeSeconds)} >
                                        <Timer />
                                    </Button>
                                )}
                            </div>
                        </TableCell>

                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}