import { useState, useContext, useEffect } from "react";
import { Product } from "../types/products";
import { CartContext } from "../contexts/CartContext";

interface UseProductInfoArgs {
  product: Product;
}

export const useProductInfo = ({ product }: UseProductInfoArgs) => {
  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  if (!cartContext) {
    throw new Error("useProductInfo must be used within a CartProvider");
  }

  const { state, dispatch } = cartContext;

  useEffect(() => {
    const existingProduct = state.products.find((p) => p.id === product.id);
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
    } else {
      setQuantity(0); // Reset quantity if product is not found in the cart
    }
  }, [state, product]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    const existingProduct = state.products.find((p) => p.id === product.id);
    if (existingProduct) {
      dispatch({ type: "UPDATE_QUANTITY", productId: product.id, quantity: newQuantity });
    } else {
      dispatch({ type: "ADD_TO_CART", product: { ...product, quantity: newQuantity } });
    }
  };

  const handleDecrease = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 0;
    setQuantity(newQuantity);

    if (newQuantity === 0) {
      dispatch({ type: "REMOVE_FROM_CART", productId: product.id });
    } else {
      dispatch({ type: "UPDATE_QUANTITY", productId: product.id, quantity: newQuantity });
    }
  };

  const handleRemove = () => {
    setQuantity(0);
    dispatch({ type: "REMOVE_FROM_CART", productId: product.id });
  };

  return {
    quantity,
    handleDecrease,
    handleIncrease,
    handleRemove,
  };
};
