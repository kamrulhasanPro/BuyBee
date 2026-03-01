export const dynamic = "force-dynamic";
import { getSpecificProduct } from "@/actions/Actions";
import ProductDetailsCard from "@/components/cards/ProductDetailsCard";
import RatingSection from "@/components/sections/ProductDetails/RatingSection";
import MyContainer from "@/components/shares/MyContainer";
import { Button } from "@/components/ui/button";
import { BadgeInfo } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await getSpecificProduct(id);
  console.log(product);

  if (!product || "notFound" in product) {
    return (
      <MyContainer className="flex items-center justify-center">
        <div className="max-w-96 flex flex-col items-center justify-center text-center gap-2 border-2 border-red-400/20 p-4 rounded-lg">
          <BadgeInfo size={52} stroke="red" />
          <p>
            <span className="font-bold text-red-400">Sorry,</span>
            <br /> Not found this product.
          </p>
          <Link href={"/products"}>
            <Button className="cursor-pointer">Back To Shop</Button>
          </Link>
        </div>
      </MyContainer>
    );
  }

  return (
    <MyContainer className="space-y-10">
      <ProductDetailsCard product={product} />
      <RatingSection product={product} />
    </MyContainer>
  );
};

export default ProductDetailsPage;
