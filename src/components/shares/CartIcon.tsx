"use client";
import { useCart } from "@/hooks/useCart";
import React from "react";

const CartIcon = () => {
  const { state, dispatch } = useCart();
  console.log(state);
  return <div>{state.cart.length}</div>;
};

export default CartIcon;
