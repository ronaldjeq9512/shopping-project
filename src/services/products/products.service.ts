import { productsData } from "./products.data";

export const productsService = {
  productList: () => productsData.getProductList(),
};
