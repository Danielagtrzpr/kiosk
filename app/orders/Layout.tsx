import OrderSidebar from "@/components/OrderSidebar";
import OrderSummary from "@/components/OrderSummary";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen bg-gray-900 gap-2">
        <OrderSidebar/>
        <main className="flex-1 bg-background p-4">
            {children}
        </main>
        <OrderSummary/>
      </div>
    );
  }