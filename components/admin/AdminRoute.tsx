"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminRouteProps = {
  link: {
    url: string;
    text: string;
    blank: boolean;
  };
};

export default function AdminRoute({ link }: AdminRouteProps) {
  const pathName = usePathname();
  const isActive = pathName.startsWith(link.url);
  return (
    <Link
      className={`${
        isActive ? "bg-gray-950" : "bg-gray-900"
      } max-w-full flex font-bold  text-xl px-4 py-2 rounded-2xl`}
      href={link.url}
      target={link.blank ? "_blank" : ""}
    >
      {link.text}
    </Link>
  );
}
