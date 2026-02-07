import { getProducts } from "@/actions/Actions";
import ProductCard from "@/components/cards/ProductCard";
import MyContainer from "@/components/shares/MyContainer";
import MyTitle from "@/components/shares/MyTitle";
import { ProductType } from "@/types/types";
import React from "react";

const Products = async () => {
  const products: ProductType[] = await getProducts();

  return (
    <MyContainer className="space-y-10">
      {/* title */}
      <div className="flex items-center justify-center">
        <MyTitle>
          All <span className="text-primary">Products</span>
        </MyTitle>
      </div>

      {/* products */}
      <div className="grid grid-cols-4 gap-7">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </MyContainer>
  );
};

export default Products;
