import { GetProductListResponse } from '../../types/products';
import { apiClient } from '../apiClient';

export const productsData = {
  getProductList: async (): Promise<GetProductListResponse | null> => {
    const {data} = await apiClient.get<GetProductListResponse>('/products');
    return data;
  },
};
