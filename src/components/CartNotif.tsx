"use client";
import { CartContext } from "@/contexts/CartProvider";
import { ComponentProps, useContext } from "react";

function CartNotif({ ...rest }: ComponentProps<"p">) {
  const CartState = useContext(CartContext);
  return <p {...rest}>{CartState.itemsCount}</p>;
}

export default CartNotif;
