"use server"

import { OrderSchema } from "@/src/schema"

//actions always need to be async
export async function createOrder(data:unknown) {
    const result = OrderSchema.safeParse(data)
    //console.log(result.success)
    if(!result.success){
        return {
            errors: result.error.issues
        }
    }
}