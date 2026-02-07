"use client";
import Link from "next/link";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Heart, SearchIcon, ShoppingCart, User } from "lucide-react";
const MainHeader = () => {
  // search
  const searchElement = (
    <Field className="w-full border-none">
      <InputGroup className="bg-[#F0F8FF] border-none">
        <InputGroupInput
          id="inline-start-input"
          placeholder="Search Items here........"
        />
        <InputGroupAddon align="inline-end">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );

  return (
    // main header
    <div className="px-[4%] py-3 space-y-2">
      <div className="flex items-center justify-between gap-6 mx-auto">
        {/* logo */}
        <Link
          href={"/"}
          className="sm:flex-1 text-2xl font-bold text-primary md:text-center "
        >
          BuyBee
        </Link>

        {/* Search */}
        <div className="hidden sm:block sm:flex-6">{searchElement}</div>

        {/* icons */}
        <div className="flex items-center gap-4 text-nowrap sm:flex-2">
          {/* login  */}
          <Link href={"/login"} className="flex items-end gap-1">
            <User size={32} />
            <span className="text-[12px] hidden md:block">Sign Up/Sign In</span>
          </Link>

          {/* cart  */}
          <div className="flex items-end gap-1">
            <ShoppingCart size={32} />
            <span className="text-[12px] hidden md:block">Cart</span>
          </div>

          {/* favorite */}
          <div>
            <Heart />
          </div>
        </div>
      </div>

      {/* mobile Search */}
      <div className="sm:hidden">{searchElement}</div>
    </div>
  );
};

export default MainHeader;
