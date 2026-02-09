import PlaceOrderInfo from "@/components/sections/Checkout/PlaceOrderInfo";
import ShoppingForm from "@/components/sections/Checkout/ShoppingForm";
import MyContainer from "@/components/shares/MyContainer";
import React from "react";

const page = () => {
  return (
    <MyContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* shopping form */}
      <>
        <ShoppingForm />
      </>

      {/* order place action */}
      <>
        <PlaceOrderInfo />
      </>
    </MyContainer>
  );
};

export default page;
