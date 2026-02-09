"use client";
import { CartAction, CartItem } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCart } from "@/hooks/useCart";
import { TableCell, TableRow } from "../ui/table";
import { X } from "lucide-react";

const CartProductCard = ({ product }: { product: CartItem }) => {
  const { id, title, price, quantity, image } = product;
  const [value, setValue] = useState(quantity || 1);
  const { dispatch } = useCart();
  return (
    <>
      <TableRow>
        {/* image */}
        <TableCell className="font-medium">
          <Image
            src={
              "https://res.cloudinary.com/dzalserrg/image/upload/v1770475980/GP11_PRD3_1_mcikph.png"
            }
            width={54}
            height={54}
            alt={title}
          />
        </TableCell>

        {/* quantity */}
        <TableCell>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setValue(Math.max(1, value - 1));
                dispatch({ type: "DECREASE_QTY", payload: { id } });
              }}
            >
              −
            </Button>

            <Input value={value} readOnly className="w-12 text-center" />

            <Button
              size="icon"
              onClick={() => {
                setValue(value + 1);
                dispatch({ type: "INCREASE_QTY", payload: { id } });
              }}
            >
              +
            </Button>
          </div>
        </TableCell>

        {/* price */}
        <TableCell>
          <p>${price}</p>
        </TableCell>

        {/* total price */}
        <TableCell className="text-right">
          <p>${price * value}</p>
        </TableCell>

        {/* close */}
        <TableCell>
          <Button
            onClick={() =>
              dispatch({
                type: "REMOVE_TO_CART",
                payload: { id },
              })
            }
            size={"icon-xs"}
            variant={"destructive"}
            className="cursor-pointer"
          >
            <X />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CartProductCard;
