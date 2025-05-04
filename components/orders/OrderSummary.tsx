"use client";
import { useStore } from "@/src/store";

export default function OrderSummary() {
  const { order } = useStore();

  return (
    <aside className="w-2xs bg-background p-4">
        <h2 className="font-black text-4xl">Mi Pedido</h2>
        {order.length === 0 ? (
          <p className="mt-5 text-center">No hay productos en el pedido</p>
        ) : (
          <div className="flex flex-col gap-4 mt-5">
            {order.map((product) => (
              <div key={product.id} className="flex items-center justify-between">
                <p className="font-black text-2xl">{product.name}</p>
              </div>
            ))}
          </div>
        )}
    </aside>
  )
}
