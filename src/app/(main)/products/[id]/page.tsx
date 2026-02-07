import { getSpecificProduct } from "@/actions/Actions";
import ProductDetailsCard from "@/components/cards/ProductDetailsCard";
import RatingSection from "@/components/sections/ProductDetails/RatingSection";
import MyContainer from "@/components/shares/MyContainer";
import React from "react";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await getSpecificProduct(id);
  // console.log(product);
  return (
    <MyContainer className="space-y-10">
      <ProductDetailsCard product={product} />
      <RatingSection product={product}/>
    </MyContainer>
  );
};

export default ProductDetailsPage;
