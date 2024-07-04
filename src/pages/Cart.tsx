import { AppContext } from "@/Context/AppContext";
import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import React from "react";
import { useShoppingCartContext } from "../Context/AppContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <>
      <Container>
        <div>
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
        </div>
        <div className="w-full flex flex-col font-vazir gap-y-2 mt-16 bg-zinc-300 p-4 rounded-lg">
          <span className="font-bold text-blue-700">
            قیمت کل:1000<span>تومان</span>
          </span>
          <span className="font-bold text-red-700">
            مقدار تخفیف:200<span> تومان</span>
          </span>
          <span className="font-bold text-green-700">
            قیمت نهایی:800<span>تومان</span>
          </span>
          <Button
            color="secoundary"
            size="md"
            rounded="sm"
            className="w-auto font-vazir">
            ثبت سفارش
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Cart;
