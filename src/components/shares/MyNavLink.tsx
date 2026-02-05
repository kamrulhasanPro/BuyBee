"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const location = usePathname();
  const active = location === href;
  const defaultStyle = "";

  return (
    <Link
      href={href}
      className={`${active ? "text-primary font-medium" : "font-medium"}`}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
