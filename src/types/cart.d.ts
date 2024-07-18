import { Product } from "./products";

export interface ProductCart extends Product {
    quantity: number
  }
  
  export interface CartState {
    products: ProductCart[];
    totalQuantity: number;
    totalPrice: number;
  }
  
  export type Action =
    | { type: "ADD_TO_CART"; product: ProductCart }
    | { type: "REMOVE_FROM_CART"; productId: string }
    | { type: "CLEAR_CART" }
    | { type: "UPDATE_QUANTITY"; productId: string; quantity: number };