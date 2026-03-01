import { ProductType } from "@/types/types";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ShoppingCartIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import AddToCart from "../buttons/AddToCart";

const ProductCard = ({
  product,
  ratingShow = true,
}: {
  product: ProductType;
  ratingShow?: boolean;
}) => {
  const {
    _id,
    title,
    images,
    price,
    originalPrice,
    isNew,
    averageRating,
    reviewCount,
  } = product;

  const discountParentage = originalPrice
    ? ((originalPrice - price) / originalPrice) * 100
    : 0;

  return (
    <div className="space-y-4">
      <div className="bg-secondary rounded-lg overflow-hidden relative">
        {/* discount card */}
        {originalPrice ? (
          <div className="absolute bg-[#DB4444] inline-block mt-3 ml-3 px-1 text-white rounded-sm text-sm">
            <span>-{Math.floor(discountParentage)}%</span>
          </div>
        ) : (
          isNew && (
            <div className="absolute bg-green-400 inline-block mt-3 ml-3 px-1 text-white rounded-sm text-sm">
              <span>NEW</span>
            </div>
          )
        )}

        {/* product image */}
        <Link href={`/products/${_id}`}>
          <figure className="p-3 flex items-center justify-center h-54">
            <Image
              src={images[0]}
              width={200}
              height={200}
              alt={title}
              className="hover:scale-105 duration-300 cursor-pointer"
            />
          </figure>
        </Link>

        <AddToCart
          product={product}
          trueLabel="Add Cart"
          falseLabel="Remove Cart"
          className="w-full rounded-none"
        >
          <ShoppingCartIcon />
        </AddToCart>
      </div>

      {/* text content info */}
      <div className=" font-medium space-y-2">
        {/* title */}
        <Link href={`/products/${_id}`}>{title}</Link>
        {/* price */}
        <p className="text-[#DB4444]">
          ${price}{" "}
          {originalPrice && (
            <del className="text-gray-400">${originalPrice}</del>
          )}
        </p>

        {/* rating */}
        {ratingShow && (
          <div className="flex items-center gap-1 text-sm">
            {[...Array(5)].map((_, i) =>
              averageRating > i + 1 ? (
                <StarIcon
                  className=""
                  fill="#FFAD33"
                  key={i}
                  stroke="#FFAD33"
                />
              ) : (
                <StarIcon
                  key={i}
                  stroke="rgba(0, 0, 0, 0.1)"
                  fill="rgba(0, 0, 0, 0.25)"
                />
              ),
            )}
            <span className="text-gray-400">({reviewCount})</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
