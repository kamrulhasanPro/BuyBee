"use client";
import CartProductsSection from "@/components/sections/Cart/CartProductsSection";
import MyContainer from "@/components/shares/MyContainer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { BaggageClaim } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  const { state, dispatch } = useCart();
  return (
    <MyContainer>
      {state?.cart?.length > 0 ? (
        <CartProductsSection state={state} dispatch={dispatch} />
      ) : (
        <div className="max-w-72 mx-auto flex flex-col items-center justify-center text-center gap-2 border-2 border-red-400/20 p-4 rounded-lg">
          <div className="bg-red-400 p-2 rounded-full text-white">
            <BaggageClaim size={52} />
          </div>
          <p>
            <span className="font-bold text-red-400">Oops!</span> Your cart is empty. <br />Start
            shopping now.
          </p>
          <Link href={"/products"}>
            <Button className="w-full cursor-pointer">Shop Now</Button>
          </Link>
        </div>
      )}
    </MyContainer>
  );
};

export default CartPage;
