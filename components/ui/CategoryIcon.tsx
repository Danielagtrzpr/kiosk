import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

type CategoryIconProps = {
  category: Category// This is the type of the category object returned by Prisma Prima generates types for my models
}

export default function CategoryIcon( { category }: CategoryIconProps) {
  return (
    <div className="flex w-full h-12 items-center p-2 gap-4 text-xl">
        <div className="relative w-10 h-10">
            <Image fill src={`/icon_${category.slug}.svg`} alt="Image Category"/>
        </div>
        <Link 
          href={`/orders/${category.slug}`}
          className="font-bold">
            {category.name}
        </Link>
    </div>
  )
}
