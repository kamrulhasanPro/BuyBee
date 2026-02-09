import CartProductCard from "@/components/cards/CartProductCard";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartAction, CartStateType } from "@/types/types";
import Link from "next/link";
import React from "react";

type CartContextType = {
  state: CartStateType;
  dispatch: React.Dispatch<CartAction>;
};

const CartProductsSection = ({ state, dispatch }: CartContextType) => {
  const totalAmount = state.cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <section className="flex flex-col md:flex-row gap-5">
      {/* cart items show */}
      <div className="flex-2 border border-secondary ">
        <Table>
          <TableCaption>Cart Items Products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {state.cart.map((product) => (
              <CartProductCard product={product} key={product.id} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Price</TableCell>
              <TableCell className="text-right">${totalAmount}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      {/* total cost */}
      <div className="flex-1 border border-sidebar-border/20 rounded-md p-6 space-y-6">
        <h6 className="text-2xl font-medium">Total</h6>

        {/* inTotal cost */}
        <div>
          <LabelValue label="Subtotal" value={`$${totalAmount}`} />
          <LabelValue label="Delivery" value={`Free`} />
          <LabelValue label="Total" value={`$${totalAmount}`} />
        </div>
        <div>
          <Link href={"/checkout"}>
            <Button className="w-full cursor-pointer">Process Checkout</Button>
          </Link>
          <Link href={"/products"}>
            <Button className="w-full cursor-pointer mt-2">Back To Shop</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const LabelValue = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex gap-2 items-center justify-between py-2 border-b last:border-none">
      {/* label */}
      <p>{label}:</p>

      {/* value */}
      <p>{value}</p>
    </div>
  );
};
export default CartProductsSection;
