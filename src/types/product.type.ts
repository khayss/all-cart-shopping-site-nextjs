export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type CartItem = Product & {
  quantity: number;
};

export interface Cart {
  itemsCount: number;
  items: { [id: number]: CartItem | null };
}

export enum CartActionTypes {
  ADD,
  REMOVE,
  BLUR,
  CHANGE,
  INCREASE,
  DECREASE,
  RESET,
}

interface AddToCart {
  type: CartActionTypes.ADD;
  payload: CartItem;
}
interface ChangeQuantity {
  type:
    | CartActionTypes.REMOVE
    | CartActionTypes.INCREASE
    | CartActionTypes.DECREASE;
  payload: number;
}
interface QuantityChange {
  type: CartActionTypes.CHANGE | CartActionTypes.BLUR;
  payload: { id: number; quantity: number };
}
interface ResetCart {
  type: CartActionTypes.RESET;
}
export type CartAction =
  | AddToCart
  | QuantityChange
  | ChangeQuantity
  | ResetCart;
