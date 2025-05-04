"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";

export default function OrderSummary() {
  const { order } = useStore();

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
    </aside>
  )
}
