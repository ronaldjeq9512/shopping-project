import { useCallback, useEffect, useState } from "react";
import { productsService } from "../services/products/products.service";
import { GetProductListResponse, Product } from "../types/products";

interface useProductDetailArgs {
  productId: string;
}

export const useProductDetail = ({ productId }: useProductDetailArgs) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSearching, setIsSearching] = useState(false); 
  const [productList, setProductList] = useState<GetProductListResponse | []>([]);
  const [productDetail, setProductDetail] = useState<Product | undefined>(
    undefined
  );

  const getProductDetail = useCallback(
    (productList: Product[]) => {
      const foundObject = productList.find((item) => item.id === productId);
      setProductDetail(foundObject);
      setIsSearching(false);
    },
    [productId]
  );

  const getProducts = useCallback(async () => {
    try {
      setIsSearching(true)
      setError(false);
      setIsLoading(true);
      const response = await productsService.productList();
      if (response) {
        getProductDetail(response);
        setProductList(response)
      }
    } catch (e) {
      setError(true);
      setIsSearching(false);
    } finally {
      setIsLoading(false);
    }
  }, [getProductDetail]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const existProducts = !error && !isLoading && productList.length > 0;

  return {
    productDetail,
    isLoading,
    error,
    productList,
    existProducts,
    isSearching
  };
};
