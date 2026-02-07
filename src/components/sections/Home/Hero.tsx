import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ReuseableSlide from "@/components/shares/ReuseableSlide";

export default function Hero() {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const carouselImage = [
    {
      title: "Up to 15% off Voucher",
      subTitle: "On all types of products",
      image:
        "https://res.cloudinary.com/dzalserrg/image/upload/v1770388249/pngwingcom_wq33s4.png",
    },
    {
      title: "Up to 20% off Voucher",
      subTitle: "On family shop of products",
      image:
        "https://res.cloudinary.com/dzalserrg/image/upload/v1770403249/familyCart_lauhhy.png",
    },
  ];
  return (
    <>
      <ReuseableSlide settings={settings}>
        {carouselImage.map((carousel, i) => (
          <div key={i}>
            <div className="flex flex-col md:flex-row gap-4 justify-between bg-gradient-to-r from-blue-500/20 via-sky-400/20 to-indigo-500/20 px-6 pt-6 md:h-[calc(100vh-66px-112px-24px)]">
              {/* text content */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
                <h5 className="text-3xl md:text-5xl text-secondary">
                  {carousel.title}
                </h5>
                <p className="text-xl md:text-3xl text-white">
                  {carousel.subTitle}
                </p>
                <Button className="rounded-full cursor-pointer">
                  Shop Now
                </Button>
              </div>

              {/* image */}
              <div className="flex-1 flex items-end justify-center w-full h-full">
                <Image
                  src={carousel.image}
                  height={300}
                  width={400}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-contain"
                  // unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </ReuseableSlide>
    </>
  );
}
