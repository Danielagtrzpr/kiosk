import ToastNotification from "@/components/ui/ToastNotification";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex">
                <aside className="w-3xs bg-gray-900 p-4">
                    <AdminSidebar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-950 p-4">
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}