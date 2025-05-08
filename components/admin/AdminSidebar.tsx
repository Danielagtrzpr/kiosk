import Logo from "../ui/Logo";
import AdminRoute from "./AdminRoute";

const adminNavigation = [
  { url: "/admin/orders", text: "Ordenes", blank: false },
  { url: "/admin/products", text: "Productos", blank: false },
  { url: "/orders/cafe", text: "Ver Quiosco", blank: true },
];

export default function AdminSidebar() {
  return (
    <>
      <Logo />
      <div className="flex flex-col space-y-3">
        <p className="flex items-center justify-center mt-10 uppercase font-bold text-sm text-gray-600">
          Navegación
        </p>
        <nav className="flex flex-col w-full gap-4">
          {adminNavigation.map((link) => (
            <AdminRoute key={link.url} link={link} />
          ))}
        </nav>
      </div>
    </>
  );
}
