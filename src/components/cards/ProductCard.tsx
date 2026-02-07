import { ProductType } from "@/types/types";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ProductCard = ({ product }: { product: ProductType }) => {
  const { title, images, price, originalPrice, isNew } = product;

  const discountParentage =
    originalPrice && ((originalPrice - price) / originalPrice) * 100;

  return (
    <div className="space-y-4">
      <div className="bg-secondary rounded-lg overflow-hidden relative">
        {/* discount card */}
        {originalPrice && (
          <div className="absolute bg-[#DB4444] inline-block mt-3 ml-3 px-1 text-white rounded-sm text-sm">
            <span>-{Math.floor(discountParentage)}%</span>
          </div>
        )}

        {/* is */}
        {isNew && (
          <div className="absolute bg-green-400 inline-block mt-3 ml-3 px-1 text-white rounded-sm text-sm">
            <span>NEW</span>
          </div>
        )}

        {/* product image */}
        <figure className="p-3 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dzalserrg/image/upload/v1770475980/GP11_PRD3_1_mcikph.png"
            width={200}
            height={200}
            alt={title}
            className="hover:scale-105 duration-300 cursor-pointer"
          />
        </figure>

        {/* cart btn */}
        <Button className="rounded-none w-full cursor-pointer">Add Cart</Button>
      </div>

      {/* text content info */}
      <div className=" font-medium">
        <p>{title}</p>
        <p className="text-[#DB4444]">
          ${price}{" "}
          {originalPrice && (
            <del className="text-gray-400">${originalPrice}</del>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
