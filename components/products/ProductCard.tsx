import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className="flex flex-col items-center bg-gray-900 rounded-md">
      <div className="relative w-full h-auto aspect-[3/4]">
        <Image
          fill
          src={`/products/${product.image}.jpg`}
          alt={`Image meal ${product.name}`}
        />
      </div>
      <div className="flex flex-col w-full h-full p-4 space-y-2">
        <h3 className="text-md font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">{formatCurrency(product.price)}</p>
        <button className="mt-auto w-full py-3 font-black bg-indigo-600 hover:bg-indigo-700 uppercase cursor-pointer">Agregar</button>
      </div>
     </div>
  )
}
