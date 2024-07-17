import { ProductCart } from "./cart";
import { FormValues } from "./userOrderForm";

export interface SetOrderRequestParams {
    user: FormValues,
    products: ProductCart[],
    total: number,
}

export interface SetOrderResponse {
    status: number
}