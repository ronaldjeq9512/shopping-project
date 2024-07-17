import { SetOrderRequestParams, SetOrderResponse } from '../../types/orders';
import { apiClient } from '../apiClient';

export const ordersData = {
  setOrder: async (
    params: SetOrderRequestParams,
  ): Promise<SetOrderResponse | null> => {
    const response = await apiClient.post<SetOrderResponse>('/orders', params);
    return {
        status: response?.status?? 200
    }
  },
};
