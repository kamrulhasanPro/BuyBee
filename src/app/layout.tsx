import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/shares/TopBar";

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
      <body className={`antialiased`}>

        {/* header */}
        <header>
          <TopBar/>
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
