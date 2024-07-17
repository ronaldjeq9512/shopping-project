import { SetOrderRequestParams } from "../../types/orders";
import { ordersData } from "./orders.data";

export const ordersService = {
  setOrder: (params: SetOrderRequestParams) => ordersData.setOrder(params),
};
