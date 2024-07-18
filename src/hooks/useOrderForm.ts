import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "../types/userOrderForm";
import { ordersService } from "../services/orders/orders.service";
import { useNavigate } from "react-router-dom";

export const useOrderForm = () => {
  const cartContext = useContext(CartContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  if (!cartContext) {
    throw new Error("useOrderForm must be used within a CartProvider");
  }

  const { state, dispatch } = cartContext;
  const { totalPrice, products } = state;
  const deliveryCost = totalPrice > 50 ? 0 : 7;
  const finalTotal = totalPrice + deliveryCost;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      await ordersService.setOrder({
        products,
        total: finalTotal,
        user: data
      });
      dispatch({ type: "CLEAR_CART" });
      navigate('/', { replace: true });

      window.history.pushState(null, '', '/');
      window.history.replaceState(null, '', '/');
      
      alert(`Pedido confirmado`);
    } catch (e) {
      alert(`No se pudo realizar el pedido, inténtelo más tarde`);
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  }
}
