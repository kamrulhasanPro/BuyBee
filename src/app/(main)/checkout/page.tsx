import ShoppingForm from "@/components/sections/Checkout/ShoppingForm";
import MyContainer from "@/components/shares/MyContainer";
import React from "react";

const page = () => {
  return (
    <MyContainer className="grid grid-cols-2 gap-6">
      {/* shopping form */}
      <div>
        <ShoppingForm />
      </div>

      {/* order place action */}
      <div></div>
    </MyContainer>
  );
};

export default page;
