"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({
  href,
  children,
  end = false,
}: {
  href: string;
  children: React.ReactNode;
  end?: boolean;
}) => {
  const location = usePathname();
  const active = end ? location.includes(href) : location === href;

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
