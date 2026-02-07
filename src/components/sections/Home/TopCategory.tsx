"use client";
import React, { useRef } from "react";
import MyContainer from "@/components/shares/MyContainer";
import MyTitle from "@/components/shares/MyTitle";
import {
  Cable,
  Camera,
  Gamepad,
  HardDrive,
  Headphones,
  Laptop,
  LucideIcon,
  Monitor,
  Printer,
  Smartphone,
  Speaker,
  Tablet,
  Watch,
} from "lucide-react";
import ReuseableSlide from "@/components/shares/ReuseableSlide";
import CategoryCard from "@/components/cards/CategoryCard";
import Slider from "react-slick";
import ArrowCustom from "@/components/shares/ArrowCustom";

const TopCategory = () => {
  const slideRef = useRef(Slider || null);

  type CategoryType = {
    id: number;
    name: string;
    icon: LucideIcon;
    bg: string;
  };

  const categories: CategoryType[] = [
    {
      id: 1,
      name: "Phones",
      icon: Smartphone,
      bg: "bg-sky-200",
    },
    {
      id: 2,
      name: "Computers",
      icon: Laptop,
      bg: "bg-yellow-400",
    },
    {
      id: 3,
      name: "Smart Watch",
      icon: Watch,
      bg: "bg-green-200",
    },
    {
      id: 4,
      name: "Camera",
      icon: Camera,
      bg: "bg-blue-300",
    },
    {
      id: 5,
      name: "Headphones",
      icon: Headphones,
      bg: "bg-orange-400",
    },
    {
      id: 6,
      name: "Gaming",
      icon: Gamepad,
      bg: "bg-purple-300",
    },
    {
      id: 7,
      name: "Tablets",
      icon: Tablet,
      bg: "bg-indigo-200",
    },
    {
      id: 8,
      name: "TV & Monitor",
      icon: Monitor,
      bg: "bg-rose-200",
    },
    {
      id: 9,
      name: "Accessories",
      icon: Cable,
      bg: "bg-teal-200",
    },
    {
      id: 10,
      name: "Speakers",
      icon: Speaker,
      bg: "bg-amber-300",
    },
    {
      id: 11,
      name: "Printers",
      icon: Printer,
      bg: "bg-lime-200",
    },
    {
      id: 12,
      name: "Storage",
      icon: HardDrive,
      bg: "bg-cyan-200",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <MyContainer className="space-y-10">
      {/* title */}
      <div className="flex items-center justify-between gap-2">
        <MyTitle>
          Shop From <span className="text-primary">Top Category</span>
        </MyTitle>
        <ArrowCustom ref={slideRef} />
      </div>

      {/* slide */}
      <div>
        <ReuseableSlide ref={slideRef} settings={settings}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </ReuseableSlide>
      </div>
    </MyContainer>
  );
};

export default TopCategory;
