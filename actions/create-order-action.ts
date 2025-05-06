"use server"

import { products } from "@/prisma/data/products"
import { prisma } from "@/src/lib/prisma"
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
    //this "data" prop is in the server and "result.data" already pass the ZOD validation
    console.log(result.data)
    //so we can write in db
    try {
        await prisma.order.create({
            data:{
                name:result.data.name,
                total:result.data.total,
                orderProducts:{
                    create: result.data.order.map(product=>({
                        productId:product.id,
                        quantity:product.quantity
                    }))
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
    
}