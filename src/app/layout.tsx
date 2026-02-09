import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/shares/TopBar";
import MainHeader from "../components/shares/MainHeader";
import Navbar from "@/components/shares/Navbar";
import CartProvider from "@/contexts/CartProvider";
import SessionProviderContext from "@/contexts/SessionProviderContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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
      <body className={`${poppins.className} antialiased`}>
        <SessionProviderContext>
          <CartProvider>
            {/* header */}
            <header>
              <TopBar />
            </header>
            <div className="sticky top-0 left-0 z-50 bg-white">
              <MainHeader />
              <Navbar />
            </div>

            {/* main */}
            <main>{children}</main>

            {/* footer */}
            <footer>{/* footer */}</footer>
          </CartProvider>
        </SessionProviderContext>
      </body>
    </html>
  );
}
