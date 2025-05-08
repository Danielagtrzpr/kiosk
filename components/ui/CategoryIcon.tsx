"use client";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type CategoryIconProps = {
  category: Category; // This is the type of the category object returned by Prisma Prima generates types for my models
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams<{ category: string }>(); // This hook is used to get the current URL parameters
  return (
    <div
      className={`${
        params.category === category.slug ? "bg-gray-950" : "bg-ambegray-900"
      } flex w-full py-2 px-4 items-center p-2 gap-4 text-xl rounded-2xl`}
    >
      <div className="relative w-10 h-10">
        <Image fill src={`/icon_${category.slug}.svg`} alt="Image Category" />
      </div>
      <Link href={`/orders/${category.slug}`} className="font-bold w-full">
        {category.name}
      </Link>
    </div>
  );
}
