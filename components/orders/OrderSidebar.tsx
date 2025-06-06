import { prisma } from "@/src/lib/prisma"
import CategoryIcon from "../ui/CategoryIcon"
import Logo from "../ui/Logo"

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
  return (
    <aside className="w-3xs p-4">
      <Logo/>
      <nav className="mt-10"> 
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category}/>
        ))}
      </nav>
    </aside>
  )
}
