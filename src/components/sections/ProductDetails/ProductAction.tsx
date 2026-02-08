"use client";

import AddToCart from "@/components/buttons/AddToCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { ProductType } from "@/types/types";
import { Heart } from "lucide-react";
import { useState } from "react";

export function ProductAction({ product }: { product: ProductType }) {
  const [value, setValue] = useState(2);
  const { state, dispatch } = useCart();

  const isFavorite = state.favorite.some((id) => id === product.id);

  return (
    <div className="flex-1 space-y-2">
      {/* quantity */}
      <div className="flex items-center gap-2">
        <span>Quantity</span>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setValue(Math.max(1, value - 1))}
          >
            −
          </Button>

          <Input value={value} readOnly className="w-12 text-center" />

          <Button size="icon" onClick={() => setValue(value + 1)}>
            +
          </Button>
        </div>
      </div>

      {/* btn */}
      <div className="space-x-2">
        <Button className="cursor-pointer ">Buy Now</Button>

        {/* add to cart */}
        <AddToCart
          product={product}
          value={value}
          trueLabel="Add To Cart"
          falseLabel="Remove To Cart"
        />

        {/* favorite */}
        <Button
          onClick={() =>
            isFavorite
              ? dispatch({
                  type: "REMOVE_FAVORITE",
                  payload: { id: product.id },
                })
              : dispatch({ type: "ADD_FAVORITE", payload: { id: product.id } })
          }
          variant={"outline"}
          size={"icon"}
          className="cursor-pointer"
        >
          {isFavorite ? <Heart fill="red" stroke="red" /> : <Heart />}
        </Button>
      </div>
    </div>
  );
}
