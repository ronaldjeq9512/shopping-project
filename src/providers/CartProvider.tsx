import { useReducer, ReactNode } from "react";
import { CartContext } from "../contexts/CartContext";
import { cartReducer, initialState } from "../reducers/CartReducer";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};