"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";

type slideType = { ref: React.RefObject<Slider | null> };
const ArrowCustom = ({ ref }: slideType) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => ref.current?.slickPrev()}
        className="p-2.5 rounded-full bg-[#F5F5F5] cursor-pointer"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => ref.current?.slickNext()}
        className="p-2.5 rounded-full bg-[#F5F5F5] cursor-pointer"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default ArrowCustom;
