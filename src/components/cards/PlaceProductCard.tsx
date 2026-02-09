import { CartItem } from "@/types/types";
import Image from "next/image";
import React from "react";

const PlaceProductCard = ({ item }: { item: CartItem }) => {
  const { image, quantity, title, price } = item || {};
  const totalPrice = price * quantity;
  return (
    <div className="flex items-center justify-between gap-2 py-2 border-b last:border-none">
      {/* product info */}
      <div className="flex items-center gap-4">
        {/* image */}
        <Image
          src={
            "https://res.cloudinary.com/dzalserrg/image/upload/v1770475980/GP11_PRD3_1_mcikph.png"
          }
          width={54}
          height={54}
          alt={title}
        />

        {/* title, multiplication price */}
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <p className="text-[12px] text-gray-400">
            ${price} * {quantity}
          </p>
        </div>
      </div>

      {/* total price */}
      <p className="font-medium text-right">${totalPrice}</p>
    </div>
  );
};

export default PlaceProductCard;
