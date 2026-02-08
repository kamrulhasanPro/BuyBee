import { getProducts } from "@/actions/Actions";
import ProductCard from "@/components/cards/ProductCard";
import MyContainer from "@/components/shares/MyContainer";
import MyTitle from "@/components/shares/MyTitle";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/types";
import Link from "next/link";
import React from "react";

const OurProducts = async () => {
  const products: ProductType[] = await getProducts();

  return (
    <MyContainer className="space-y-10">
      {/* title */}
      <div className="flex items-center justify-between gap-2">
        <MyTitle>
          Explore Our <span className="text-primary">Products</span>
        </MyTitle>

        {/* button */}
        {/* <Button>View All</Button> */}
      </div>

      {/* products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* btn  */}
      <div className="flex items-center justify-center">
        <Link href={"/products"}>
          <Button className="cursor-pointer w-32  rounded-sm">View All</Button>
        </Link>
      </div>
    </MyContainer>
  );
};

export default OurProducts;
