"use client";
import React from "react";
import { Button } from "../ui/button";
import { ProductType } from "@/types/types";
import { useCart } from "@/hooks/useCart";

const AddToCart = ({
  product,
  value = 1,
  className,
  trueLabel,
  falseLabel,
  children,
}: {
  product: ProductType;
  value?: number;
  className?: string;
  trueLabel?: string;
  falseLabel?: string;
  children?: React.ReactNode;
}) => {
  const { state, dispatch } = useCart();
  // console.log(state);
  const cartProduct = {
    id: product._id,
    title: product.title,
    price: product.price,
    image: product.images[0],
    quantity: value,
  };

  const isCarted = state.cart.some((item) => item.id === product._id);

  return (
    <>
      <Button
        onClick={() =>
          isCarted
            ? dispatch({
                type: "REMOVE_TO_CART",
                payload: { id: product._id },
              })
            : dispatch({ type: "ADD_TO_CART", payload: cartProduct })
        }
        className={`${className} ${isCarted && "bg-red-500 hover:bg-red-400"} cursor-pointer`}
      >
        {children}
        {isCarted ? falseLabel : trueLabel}
      </Button>
    </>
  );
};

export default AddToCart;
