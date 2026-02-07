"use client";
import React, { useRef } from "react";
import MyContainer from "@/components/shares/MyContainer";
import MyTitle from "@/components/shares/MyTitle";
import ReuseableSlide from "@/components/shares/ReuseableSlide";import Slider from "react-slick";
import ArrowCustom from "@/components/shares/ArrowCustom";
import BrandsCard from "@/components/cards/BrandsCard";

const ElectronicBrands = () => {
  const slideRef = useRef(Slider || null);

  type PromoBannerType = {
    id: number;
    title: string;
    highlight: string;
    image: string;
    bg: string;
    textColor: string;
    highlightColor: string;
  };

  const promoBanners: PromoBannerType[] = [
  {
    id: 1,
    title: "10% Off On",
    highlight: "HP Series",
    image:
      "https://res.cloudinary.com/dzalserrg/image/upload/v1770461748/pngwim_pvi0x3.png",
    bg: "bg-rose-700",
    textColor: "text-white",
    highlightColor: "text-yellow-300",
  },
  {
    id: 2,
    title: "10% Off On",
    highlight: "Apple Series",
    image:
      "https://res.cloudinary.com/dzalserrg/image/upload/v1770461739/macbook_hwgzwb.png",
    bg: "bg-orange-200",
    textColor: "text-gray-800",
    highlightColor: "text-red-600",
  },
  {
    id: 3,
    title: "10% Off On",
    highlight: "Vivo Series",
    image:
      "https://res.cloudinary.com/dzalserrg/image/upload/v1770461779/mobile_cpbmwu.png",
    bg: "bg-orange-100",
    textColor: "text-gray-900",
    highlightColor: "text-blue-600",
  },
  {
    id: 4,
    title: "70% Off On",
    highlight: "Tablet Series",
    image:
      "https://res.cloudinary.com/dzalserrg/image/upload/v1770461781/tablet_v6cbmj.png",
     bg: "bg-blue-700",
    textColor: "text-white",
    highlightColor: "text-yellow-300",
  },
];


  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <MyContainer>
      {/* title */}
      <div className="flex items-center justify-between gap-2">
        <MyTitle>
          Top Electronic <span className="text-primary">Brands</span>
        </MyTitle>
        <ArrowCustom ref={slideRef} />
      </div>

      {/* slide */}
      <div className="mt-5 ">
        <ReuseableSlide ref={slideRef} settings={settings}>
          {promoBanners.map((brand) => (
            <BrandsCard key={brand.id} brand={brand} />
          ))}
        </ReuseableSlide>
      </div>
    </MyContainer>
  );
};

export default ElectronicBrands;
