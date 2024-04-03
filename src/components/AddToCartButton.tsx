"use client";
import { CartContext, CartDispatchContext } from "@/contexts/CartProvider";
import { CartActionTypes, Product } from "@/types/product.type";
import React, { useContext } from "react";

type Props = { item: Product };

function AddToCartButton({ item }: Props) {
  const CartState = useContext(CartContext);
  const CartDispatch = useContext(CartDispatchContext);
  return (
    <button
      className={`${
        CartState.items[item.id] ? "text-red-600" : "text-slate-800"
      } bg-slate-300 hover:bg-slate-400 w-full py-3 px-4 flex items-center justify-center`}
      onClick={() =>
        CartDispatch &&
        CartDispatch({
          type: CartActionTypes.ADD,
          payload: { ...item, quantity: 1 },
        })
      }
    >
      {CartState.items[item.id] ? "Remove from cart" : "Add to cart"}
    </button>
  );
}

export default AddToCartButton;
