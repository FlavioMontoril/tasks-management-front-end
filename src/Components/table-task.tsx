import type { Task } from "../mock/tasks"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

interface TableTaskProps {
    tasks: Task[],
    onSelect: (task: Task) => void;
}

export const TableTask = ({ tasks, onSelect }: TableTaskProps) => {


    return (
        <Table className="w-full h-10 border border-border rounded-xl overflow-hidden">
            <TableHeader>
                <TableRow className="h-20 bg-muted border-white">
                    <TableHead className="w-24 text-xl font-extrabold">Código</TableHead>
                    <TableHead className="pl-10">Nome</TableHead>
                    <TableHead>Criado em</TableHead>
                    <TableHead className="w-5">Status</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((item) =>
                    <TableRow
                        key={item.id}
                        className="h-16 border-white cursor-pointer"
                        onClick={() => {
                            console.log("CLICOU", item)
                            onSelect(item)
                        }
                        }
                    >
                        <TableCell className="font-medium">{item.codigo}</TableCell>
                        <TableCell className="pl-10">{item.nome}</TableCell>
                        <TableCell>{item.dataCriacao}</TableCell>
                        <TableCell>{item.status}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}