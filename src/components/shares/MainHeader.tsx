"use client";
import Link from "next/link";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Heart, SearchIcon, ShoppingCart, User } from "lucide-react";
const MainHeader = () => {
  return (
    // main header
    <div className="flex items-center justify-between gap-6 px-[4%] mx-auto">
      {/* logo */}
      <Link href={"/"} className="flex-1 text-2xl font-bold text-primary text-center py-6">BuyBee</Link>

      {/* search */}
      <Field className="flex-6 w-full border-none">
        <InputGroup className="bg-[#F0F8FF] border-none">
          <InputGroupInput id="inline-start-input" placeholder="Search Items here........" />
          <InputGroupAddon align="inline-end">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </Field>

      {/* icons */}
      <div className="flex items-center gap-4 text-nowrap flex-2">
        {/* login  */}
        <Link href={'/login'} className="flex items-end gap-1">
          <User size={32} />
          <span className="text-[12px]">Sign Up/Sign In</span>
        </Link>

        {/* cart  */}
        <div className="flex items-end gap-1">
          <ShoppingCart size={32} />
          <span className="text-[12px]">Cart</span>
        </div>

        {/* favorite */}
        <div>
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
