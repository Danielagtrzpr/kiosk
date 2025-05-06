import OrderSidebar from "@/components/orders/OrderSidebar";
import OrderSummary from "@/components/orders/OrderSummary";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen bg-gray-900">
        <OrderSidebar/>
        <main className="flex-1 bg-gray-950 p-4 h-screen overflow-auto scrollbar-hide">
            {children}
        </main>
        <OrderSummary/>
        <ToastNotification/>
      </div>
    );
  }