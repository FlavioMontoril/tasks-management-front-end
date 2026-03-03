import type { Task } from "../mock/tasks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function AccordionTask({ tasks }: { tasks: Task[] }) {
    return (
        <Accordion type="single" collapsible className="w-full rounded-xl flex flex-col gap-2 overflow-hidden">
            {tasks.map((item) => (
                <AccordionItem className=" border-gray-300" key={item.id} value={item.id}>
                    <AccordionTrigger className="px-4 h-14 bg-background hover:bg-muted/50">
                        <div className=" flex items-center gap-4 ">
                            <span className="font-medium text-sm">{item.codigo}</span>
                            <span className="text-sm">{item.nome}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 bg-background">
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                            <span>Criado em: {item.dataCriacao.toLocaleString()}</span>
                            <span>Status: {item.status}</span>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}