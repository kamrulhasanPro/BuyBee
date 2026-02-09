"use client";
import PlaceProductCard from "@/components/cards/PlaceProductCard";
import { useCart } from "@/hooks/useCart";
import React from "react";
import { LabelValue } from "../Cart/CartProductsSection";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PlaceOrderInfo = () => {
  const { state } = useCart();
  const totalAmount = state.cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <section className="space-y-5">
      {/* place product cart */}
      <div>
        {state?.cart.map((item) => (
          <PlaceProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* inTotal cost */}
      <div>
        <LabelValue label="Subtotal" value={`$${totalAmount}`} />
        <LabelValue label="Shipping" value={`Free`} />
        <LabelValue label="Total" value={`$${totalAmount}`} />
      </div>

      {/* choose payment method */}
      <div>
        <RadioGroup defaultValue="payWithCard">
          {/* card */}
          <FieldLabel>
            <Field orientation="horizontal">
              <RadioGroupItem value="payWithCard" id="payWithCard" /> Pay with
              Card
              <FieldContent className="flex items-end justify-end w-full">
                <img src={"/paymentGateway.png"} alt={"payment getway logo"} />
              </FieldContent>
            </Field>
          </FieldLabel>

          {/* cash on delivery */}
          <FieldLabel>
            <Field orientation="horizontal">
              <RadioGroupItem value="cashOnDelivery" id="cashOnDelivery" /> Cash
              On Delivery
            </Field>
          </FieldLabel>
        </RadioGroup>
      </div>

      {/* coupon */}
      <div>
        <Field>
          <FieldLabel htmlFor={"couponCode"}>Have Coupon / Voucher</FieldLabel>
          <div className="flex gap-4">
            <Input
              placeholder={"Coupon Code"}
              id="couponCode"
              name={"couponCode"}
            />
            <Button className="cursor-pointer">Apply Coupon</Button>
          </div>
        </Field>
      </div>

      <Button className="cursor-pointer w-full rounded-sm">Place Order</Button>
    </section>
  );
};

export default PlaceOrderInfo;
