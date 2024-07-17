import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCheckout = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
      throw new Error("useCheckout must be used within a CartProvider");
    }
  
    const { state } = cartContext;
    const { products } = state;

    return {
        products
    }
}