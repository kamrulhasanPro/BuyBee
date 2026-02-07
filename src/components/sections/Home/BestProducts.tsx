import { getProducts } from "@/actions/Actions";
import ProductCard from "@/components/cards/ProductCard";
import MyContainer from "@/components/shares/MyContainer";
import MyTitle from "@/components/shares/MyTitle";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/types";
import Link from "next/link";
import React from "react";

const BestProducts = async () => {
  const products: ProductType[] = await getProducts();
  console.log(products);

  return (
    <MyContainer className="space-y-10">
      {/* title */}
      <div className="flex items-center justify-between gap-2">
        <MyTitle>
          Best Selling <span className="text-primary">Products</span>
        </MyTitle>

        {/* button */}
        <Link href={"/products"}>
          <Button className="cursor-pointer">View All</Button>
        </Link>
      </div>

      {/* products */}
      <div className="grid grid-cols-4 gap-7">
        {products.slice(0, 4).map((product) => (
          <ProductCard ratingShow={false} key={product.id} product={product} />
        ))}
      </div>
    </MyContainer>
  );
};

export default BestProducts;
