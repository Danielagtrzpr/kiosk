import ProductCard from "@/components/products/ProductCard"
import Heading from "@/components/ui/Heading"
import {prisma} from "@/src/lib/prisma"

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })
  return products
}


export default async function OrderPage({params}: {params: {category: string}}) {
  const paramsAwaited = await params
  const products = await getProducts(paramsAwaited.category)
  return (
    <>
      <Heading>Elige y personaliza tu pedido continuacion:</Heading>
      <div className="grid h-screen grid-cols-1 items-stretch md:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            />
        ))}
      </div>
    </>
  )
}
