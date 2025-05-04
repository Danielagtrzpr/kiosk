
// This is a dynamic route that will match any category
// The category slug will be available in the params object
// to implement this we need to create a folder with the name of the dynamic route
export default function OrderPage({params}) {
  console.log(params)
  return (
    <div>OrderPage</div>
  )
}
