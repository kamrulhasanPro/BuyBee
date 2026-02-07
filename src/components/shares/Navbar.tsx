import React, { ReactNode } from "react";
import { Logs, MenuIcon } from "lucide-react";
import MyNavLink from "./MyNavLink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Navbar = () => {
  const navList = (
    <>
      <MyNavLink href="/">Home</MyNavLink>
      <MyNavLink href="/contact">Contact</MyNavLink>
      <MyNavLink href="/products">Products</MyNavLink>
      <MyNavLink href="/hot-offers">Hot Offers</MyNavLink>
      <MyNavLink href="/combo">Combo</MyNavLink>
      <MyNavLink href="/clearance">Clearance</MyNavLink>
    </>
  );

  return (
    <nav className="flex items-center justify-between gap-6 border-y border-gray-200 pr-[4%]">
      <Button className="md:flex-1 rounded-none cursor-pointer">
        All Catagories <Logs />
      </Button>

      <menu className="md:flex-7">
        {/* desktop navList */}
        <div className="items-center justify-center gap-6 hidden md:flex">
          {navList}
        </div>

        {/* mobile navList */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                {navList}
              </div>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </menu>
    </nav>
  );
};

export default Navbar;
