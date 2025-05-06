"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema";
import { toast } from "react-toastify";

export default function OrderSummary() {
  const { order,clearOrder } = useStore();
  const total = useMemo(()=> order.reduce((total,item)=>total+(item.price*item.quantity),0),[order])

  async function handleCreate(formData:FormData){
    //creating this object for the future, so I can put here more fields that requires validation
    const data = {
      name: formData.get("name"),
      total,
      order
    }

    //validating the input of the user in the client
    const result = OrderSchema.safeParse(data)
    if(!result.success){
      result.error.issues.forEach((issue)=>{
        toast.error(issue.message)
      })
    }

    //validating in the server and showing toat if it fails
    const response = await createOrder(data)
    if(response?.errors){
        response.errors.forEach((issue)=>{
        toast.error(issue.message)
     })
    }

    //it just reaches here if it pass all the validations
    toast.success("Pedido realizado correctamente")
    clearOrder()
  }

  return (
    <aside className="flex flex-col w-2xs h-screen bg-gray-900 p-4">
        <h2 className="font-black text-4xl">Mi Pedido</h2>
        {order.length === 0 ? (
          <p className="mt-5 text-center">No hay productos en el pedido</p>
        ) : (
          <div className="flex flex-col gap-4 mt-5 h-full overflow-auto scrollbar-hide">
            {order.map((product) => (
              <ProductDetails
                key={product.id}
                item={product}
              />
            ))}
          </div>
        )}
        <p className="font-bold text-xl p-4">Total a pagar: {" "}
          <span className="font-black text-2xl">{formatCurrency(total)}</span>
        </p>
        <form  className="w-full mt-10 space-y-5" action={handleCreate}>
          <input
            type="text"
            placeholder="Tu Nombre"
            className="bg-gray-800 p-2 w-full"
            name="name"
          />
          <input type="submit" value="Confirar Pedido" className="py-2 rounded uppercase text-white bg-indigo-700 w-full text-center cursor-pointer font-bold" />
        </form>
    </aside>
  )
}
