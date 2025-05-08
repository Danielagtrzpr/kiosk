import Heading from "@/components/ui/Heading";
import { products } from "@/prisma/data/products";
import { prisma } from "@/src/lib/prisma";
import React from "react";

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return orders;
}

export default async function OrdersPage() {
  const pendingOrders = await getPendingOrders();
  console.log(pendingOrders);
  return (
    <div>
      <Heading>Administrar ordenes:</Heading>
    </div>
  );
}
