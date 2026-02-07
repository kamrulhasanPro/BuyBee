"use client";
import React from "react";
import Slider, { Settings } from "react-slick";

export default function ReuseableSlide({
  children,
  settings,
  className,
  ref,
}: {
  children: React.ReactNode;
  settings: Settings;
  className?: string;
  ref?: React.RefObject<Slider | null>;
}) {
  return (
    <section className={className}>
      <Slider ref={ref} {...settings}>
        {children}
      </Slider>
    </section>
  );
}
