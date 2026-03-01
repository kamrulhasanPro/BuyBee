import MyContainer from "@/components/shares/MyContainer";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <MyContainer>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </MyContainer>
  );
};

export default loading;
