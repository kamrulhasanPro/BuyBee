"use client";
import React, { useRef } from "react";
import ArrowCustom from "@/components/shares/ArrowCustom";
import MyContainer from "@/components/shares/MyContainer";
import MyTitle from "@/components/shares/MyTitle";
import Slider from "react-slick";
import Image from "next/image";
import ReuseableSlide from "@/components/shares/ReuseableSlide";

const NewArrivals = () => {
  const slideRef = useRef<Slider | null>(null);
  const bannerImages = [
    "https://res.cloudinary.com/dzalserrg/image/upload/v1770463057/smartphone-16-pro-discount-sale-banner-social-media-design-template_47987-25305_dszvve.avif",
    "https://res.cloudinary.com/dzalserrg/image/upload/v1770463057/Website_Banner_Mobile_Tile_iPhone_16_Pro_768x432_yx2xm4.jpg",
  ];

  const images = [
    "https://res.cloudinary.com/dzalserrg/image/upload/v1770463057/img-20250417-wa0004_vbkrpw.webp",
    "https://res.cloudinary.com/dzalserrg/image/upload/v1770463057/446a054a942b369a50fc3d5eb1908856_jbil20.jpg",
    "https://res.cloudinary.com/dzalserrg/image/upload/v1770463884/images_abo7rc.jpg",
    "https://res.cloudinary.com/dzalserrg/image/upload/v1770463866/new-smartphone-16-pro-social-media-flyer-design-template_47987-25402_z8nb0b.jpg",
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
    <MyContainer className="space-y-10">
      {/* title */}
      <div className="flex items-center justify-between gap-2">
        <MyTitle>
          New <span className="text-primary">Arrivals</span>
        </MyTitle>
        <ArrowCustom ref={slideRef} />
      </div>

      {/* slide */}
      <div className="w-auto">
        <ReuseableSlide ref={slideRef} settings={settings}>
          {images.map((image, i) => (
            <figure key={i} className="px-4">
              <Image
                src={image}
                width={500}
                height={600}
                alt="Iphone 1"
                className="h-full"
              />
            </figure>
          ))}
        </ReuseableSlide>
      </div>

      <div className="flex gap-4 justify-center">
        <Image
          src={
            "https://res.cloudinary.com/dzalserrg/image/upload/v1770463057/Website_Banner_Mobile_Tile_iPhone_16_Pro_768x432_yx2xm4.jpg"
          }
          width={1200}
          height={600}
          alt="Iphone 1"
        />
      </div>
    </MyContainer>
  );
};

export default NewArrivals;
