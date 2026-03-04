import { createTaskSchema, CreateTaskSchema } from "../schemas/create-task-schema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskStore } from "../store/use-task-store";
import { useEffect } from "react";

interface SheetProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void
}

export function SheetCreateTask({ isOpen, onOpenChange }: SheetProps) {

    const { addTask } = useTaskStore();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateTaskSchema>({
        resolver: zodResolver(createTaskSchema),
        defaultValues: {
            codigo: "",
            nome: "",
            timeSeconds: undefined,
        }
    });

    useEffect(() => {
        if (!isOpen) reset()
    }, [isOpen, reset])

    const onSubmit = async (data: CreateTaskSchema) => {
        await addTask(data)
        reset();
    }

    return (
        <Sheet
            open={isOpen}
            onOpenChange={onOpenChange}
        >
            <SheetContent className="bg-gray-950" >
                <SheetHeader>
                    <SheetTitle className="text-muted">Criar Tarefa</SheetTitle>
                    <SheetDescription>
                        Crie tarefas aqui. Clique em Salvar quando terminar.
                    </SheetDescription>
                </SheetHeader>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    id="task-form"
                    className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label className="text-muted" htmlFor="codigo" >Código</Label>
                        <Input className="text-muted-foreground" id="codigo" placeholder="..."
                            {...register("codigo")}
                        />
                        {errors.codigo && <span className="text-red-500 text-sm">{errors.codigo.message}</span>}
                    </div>
                    <div className="grid gap-3">
                        <Label className="text-muted" htmlFor="nome" >Nome</Label>
                        <Input className="text-muted-foreground" id="nome" placeholder="..."
                            {...register("nome")}
                        />
                        {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
                    </div>
                    <div className="grid gap-3">
                        <Label className="text-muted" htmlFor="tempo" >Tempo</Label>
                        <Input type="number" className="text-muted-foreground" id="timeSeconds" placeholder="segundos"
                            {...register("timeSeconds", { valueAsNumber: true })}
                        />
                    </div>
                </form>
                <SheetFooter>
                    <Button form="task-form" type="submit">Salvar</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Fechar</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
