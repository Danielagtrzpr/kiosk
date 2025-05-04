import ProductCard from "@/components/products/ProductCard"
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
  const products = await getProducts(params.category)
  console.log(products)
  return (
    <>
      <h2 className="text-2xl py-4">Elige y personaliza tu pedido continuacion:</h2>
      <div className="grid h-screen grid-cols-1 items-stretch md:grid-cols-3 gap-4">
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
