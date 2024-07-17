import { CartState, Action, ProductCart } from "../types/cart";

export const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
};

const calculateTotals = (products: ProductCart[]) => {
  const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
  const totalPrice = products.reduce((sum, product) => sum + product.quantity * product.price, 0);
  return { totalQuantity, totalPrice };
};

export const cartReducer = (state: CartState, action: Action): CartState => {
  let updatedProducts:ProductCart[] = [];
  switch (action.type) {
    case "ADD_TO_CART":
      updatedProducts = [...state.products, action.product];
      break;
    case "REMOVE_FROM_CART":
      updatedProducts = state.products.filter((product) => product.id !== action.productId);
      break;
    case "CLEAR_CART":
      updatedProducts = [];
      break;
    case "UPDATE_QUANTITY":
      updatedProducts = state.products.map((product) =>
        product.id === action.productId
          ? { ...product, quantity: action.quantity }
          : product
      );
      break;
    default:
      return state;
  }

  const { totalQuantity, totalPrice } = calculateTotals(updatedProducts);

  return {
    ...state,
    products: updatedProducts,
    totalQuantity,
    totalPrice,
  };
};