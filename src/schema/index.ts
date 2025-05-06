import { z } from "zod";

export const OrderSchema = z.object({
    name: z.string()
           .min(1,"Tu nombre es requerido"),
    total: z.number()
            .min(1,"Hay errores en la orden"),
    //prisma gives you the types por order but for ZOD you can not import a Type into an schema
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))

})