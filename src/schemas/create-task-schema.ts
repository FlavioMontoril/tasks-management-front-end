import z from "zod"
export const createTaskSchema = z.object({
    codigo: z.string().min(5, "Minimo de 5 caracteres").max(7, "Máximo de 7 caracteres"),
    nome: z.string().max(20, "Máximo de 20 caracteres"),
    timeSeconds: z.number().optional(),
})

export type CreateTaskSchema = z.infer<typeof createTaskSchema>