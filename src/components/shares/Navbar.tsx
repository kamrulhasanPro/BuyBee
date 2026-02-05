import React from "react";
import { Button } from "../ui/button";
import { Logs } from "lucide-react";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 border-y border-gray-200">
      <Button className="flex-1 rounded-none cursor-pointer">
        All Catagories <Logs />
      </Button>

      <menu className="flex-7 flex items-center justify-center gap-6">
        <MyNavLink href="/">Home</MyNavLink>
        <MyNavLink href="/contact">Contact</MyNavLink>
        <MyNavLink href="/product">Product</MyNavLink>
        <MyNavLink href="/hot-offers">Hot Offers</MyNavLink>
        <MyNavLink href="/combo">Combo</MyNavLink>
        <MyNavLink href="/clearance">Clearance</MyNavLink>
      </menu>
    </nav>
  );
};

export default Navbar;
