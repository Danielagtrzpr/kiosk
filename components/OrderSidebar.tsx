import { prisma } from "@/src/lib/prisma"

//Fetching data in Nextjs is posible un 4 ways one of them is using Prisma Client(ORM) directly just in server components
// otherwise in client components you can use axios or React Query
async function getCategories() {
  const categories = await prisma.category.findMany(
  //   {
  //   include: {
  //     products: true,
  //   },
  // }
 )
  return categories
}

//in Nextjs in server components they can be async
export default async function OrderSidebar() {
  const categories = await getCategories()
  console.log(categories)
  return (
    <aside className="w-72 p-4">

    </aside>
  )
}
