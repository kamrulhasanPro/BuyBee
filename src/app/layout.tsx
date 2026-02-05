import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuyBee Home",
  description: "BuyBee Home is a E-commarce platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
