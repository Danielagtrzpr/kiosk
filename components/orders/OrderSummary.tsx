"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";
import { createOrder } from "@/actions/create-order-action";

export default function OrderSummary() {
  const { order } = useStore();
  const total = useMemo(()=> order.reduce((total,item)=>total+(item.price*item.quantity),0),[order])

  function handleCreate(){
    console.log("first action implementation")//this works well but
    //with actions the thing is that "If I want to save this form info into db" this component should be a server component
    //to achieve that I need to create a new component "use server" like this
    createOrder()
  }

  return (
    <aside className="w-2xs h-screen bg-background p-4 overflow-auto scrollbar-hide">
        <h2 className="font-black text-4xl">Mi Pedido</h2>
        {order.length === 0 ? (
          <p className="mt-5 text-center">No hay productos en el pedido</p>
        ) : (
          <div className="flex flex-col gap-4 mt-5">
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
          <input type="submit" value="Confirar Pedido" className="py-2 rounded uppercase text-white bg-indigo-700 w-full text-center cursor-pointer font-bold" />
        </form>
    </aside>
  )
}
