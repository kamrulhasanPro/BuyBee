import type { Metadata } from "next";
import { Roboto, Poppins } from 'next/font/google'
import "./globals.css";
import TopBar from "@/components/shares/TopBar";
import MainHeader from "../components/shares/MainHeader";
import Navbar from "@/components/shares/Navbar";

const poppins =  Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
})

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

        {/* header */}
        <header>
          <TopBar/>
          <MainHeader/>
          <Navbar/>
        </header>

        {/* main */}
        <main>
        {children}
        </main>
        
        {/* footer */}
        <footer>
          {/* footer */}
        </footer>
        </body>
    </html>
  );
}
