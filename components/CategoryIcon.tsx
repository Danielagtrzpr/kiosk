import { Category } from "@prisma/client"

type CategoryIconProps = {
  category: Category// This is the type of the category object returned by Prisma Prima generates types for my models
}

export default function CategoryIcon( { category }: CategoryIconProps) {
  return (
    <div>{category.name}</div>
  )
}
