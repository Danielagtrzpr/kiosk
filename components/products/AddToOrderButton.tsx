"use client"

import { useStore } from "@/src/store"
import { Product } from "@prisma/client"

type AddToOrderButtonProps = {
  product: Product
}

export default function AddToOrderButton({product}: AddToOrderButtonProps) {
  const addToOrder  = useStore((state) => state.addToOrder)
  return (
    <button 
        className="mt-auto w-full py-3 font-black bg-indigo-600 hover:bg-indigo-700 uppercase cursor-pointer"
        onClick={() => addToOrder(product)}
    >
            Agregar
    </button>
  )
}
