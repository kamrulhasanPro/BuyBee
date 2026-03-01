import React from "react";
import Link from "next/link";
import MyContainer from "@/components/shares/MyContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const NotFound = () => {
  return (
    <MyContainer className="flex items-center justify-center">
      <div className="max-w-96 flex flex-col items-center justify-center text-center gap-2 border-2 border-red-400/20 p-4 rounded-lg">
        <Image
          width="66"
          height="66"
          src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-404-Error-web-hosting-and-cloud-services-smashingstocks-flat-smashing-stocks.png"
          alt="external-404-Error-web-hosting-and-cloud-services-smashingstocks-flat-smashing-stocks"
        />
        <p className="text-2xl text-red-400">
          <span className="font-bold">Opps,</span>
          <br /> Not Found Page
        </p>
        <Link href="/" >
        <Button className="cursor-pointer">Bact To Home</Button>
        </Link>
      </div>
    </MyContainer>
  );
};

export default NotFound;
