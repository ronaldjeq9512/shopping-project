import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const { state, dispatch } = cartContext;
  const { totalPrice, products } = state;

  const handleIncrease = (productId: string) => {
    const product = state.products.find((p) => p.id === productId);
    if (product) {
      dispatch({ type: "UPDATE_QUANTITY", productId, quantity: product.quantity + 1 });
    }
  };



  const handleRemove = (productId: string) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  const handleDecrease = (productId: string) => {
    const product = state.products.find((p) => p.id === productId);
    if (product && product.quantity > 1) {
      dispatch({ type: "UPDATE_QUANTITY", productId, quantity: product.quantity - 1 });
    }
    if (product && product.quantity === 1) {
        handleRemove(productId)
      }
  };

  const deliveryCost = totalPrice > 50 ? 0 : 7;
  const finalTotal = totalPrice + deliveryCost;

  return {
    handleDecrease,
    handleIncrease,
    handleRemove,
    products,
    totalPrice,
    finalTotal,
    deliveryCost,
  };
};
