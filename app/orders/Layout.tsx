import OrderSidebar from "@/components/OrderSidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="md:flex">
        <OrderSidebar/>
        {children}
      </div>
    );
  }