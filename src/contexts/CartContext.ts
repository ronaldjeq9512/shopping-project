import { createContext, Dispatch } from "react";
import { CartState, Action } from "../types/cart";

interface CartContextProps {
  state: CartState;
  dispatch: Dispatch<Action>;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);
