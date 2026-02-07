"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { useState } from "react";

export function QuantityAction() {
  const [value, setValue] = useState(2);

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
        <Button className="cursor-pointer">Add To Cart</Button>
        <Button variant={"outline"} size={"icon"} className="cursor-pointer">
          <Heart />
        </Button>
      </div>
    </div>
  );
}
