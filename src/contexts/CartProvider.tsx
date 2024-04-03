"use client";

import { Cart, CartAction } from "@/types/product.type";
import { CartReducer, initialCartState } from "@/utils/cartReducer";

import { Dispatch, ReactNode, createContext, useReducer } from "react";
type Props = { children: ReactNode };
export const CartContext = createContext<Cart>(initialCartState);
export const CartDispatchContext = createContext<Dispatch<CartAction> | null>(null);

const CartProvider = ({ children }: Props) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialCartState);
  return (
    <CartDispatchContext.Provider value={cartDispatch}>
      <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider;