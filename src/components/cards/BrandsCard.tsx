import React from "react";
import Image from "next/image";
type BrandsType = {
  id: number;
  title: string;
  highlight: string;
  image: string;
  bg: string;
  textColor: string;
  highlightColor: string;
};

const BrandsCard = ({ brand }: { brand: BrandsType }) => {
  const { id, image, title, highlight, bg, textColor, highlightColor } = brand;
  return (
    <div className="px-1 h-full">
      <div
        className={`flex ${id % 2 === 0 && "flex-row-reverse !text-left"} items-center justify-center p-6  border border-gray-200 ${bg} hover:opacity-80 duration-300 text-right min-h-[160px]`}
      >
        <figure className="w-32 h-24 flex-shrink-0">
          <Image src={image} alt={`Banner ${id}`} width={400} height={400} className="h-full w-full object-contain"/>
        </figure>
        <p className={`flex-1 ${textColor} text-2xl font-bold`}>
          {title} <span className={`${highlightColor}`}>{highlight}</span>
        </p>
      </div>
    </div>
  );
};

export default BrandsCard;
