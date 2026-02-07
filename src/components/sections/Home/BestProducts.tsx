import ProductCard from "@/components/cards/ProductCard";
import MyContainer from "@/components/shares/MyContainer";
import MyTitle from "@/components/shares/MyTitle";
import { Button } from "@/components/ui/button";
import React from "react";

export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/data/Products.json");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();

  return data;
};

const BestProducts = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <MyContainer className="space-y-10">
      {/* title */}
      <div className="flex items-center justify-between gap-2">
        <MyTitle>
          Best Selling <span className="text-primary">Products</span>
        </MyTitle>

        {/* button */}
        <Button>View All</Button>
      </div>

      {/* products */}
      <div className="grid grid-cols-4 gap-7">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </MyContainer>
  );
};

export default BestProducts;
