import { ProductType } from "@/types/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ProductAction } from "../sections/ProductDetails/ProductAction";

const ProductDetailsCard = ({ product }: { product: ProductType }) => {
  const {
    id,
    title,
    images,
    description,
    price,
    originalPrice,
    isNew,
    averageRating,
    reviewCount,
    stock,
    brand,
    keyFeatures,
  } = product;

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-6">
        {/* product img */}
        <figure className="flex-1 bg-[#FFFAFA] flex items-center justify-center rounded-lg">
          <Image
            src={
              "https://res.cloudinary.com/dzalserrg/image/upload/v1770475980/GP11_PRD3_1_mcikph.png"
            }
            alt={title}
            width={400}
            height={400}
            className="hover:scale-105 duration-300"
          />
        </figure>

        {/* product text details */}
        <div className="flex-1">
          {/* title */}
          <h2 className="text-2xl font-semibold">{title}</h2>

          {/* rating & stock */}
          <div className="flex items-center gap-2 my-2">
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
            </div>

            <span className="text-gray-400">({reviewCount} Reviews) | </span>

            <span
              className={`${stock ? "text-green-400" : "text-red-400"} font-medium`}
            >
              {stock ? "In Stock" : "Out Stock"}
            </span>
          </div>

          {/* price */}
          <h5 className="text-2xl mb-6">$ {price}</h5>

          {/* description */}
          <p>{description}</p>
          <p>Brand: {brand}</p>
          <hr className="my-2" />

          {/* key features */}
          <div>
            <h6 className="font-semibold">Key Features</h6>
            <ul className="list-disc list-inside ml-2 text-gray-400">
              {keyFeatures.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-6">
        <ProductAction product={product} />
        {/* delivery free box */}
        <div className="flex-1 flex gap-4 items-center mt-4">
          <img
            src="https://img.icons8.com/color/48/in-transit--v1.png"
            alt="delivary car icon"
          />

          <div>
            <p className="font-medium">Free Delivery</p>
            <p className="text-[12px] underline cursor-pointer">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
