import { useEffect, useState } from "react"
import { GetProductListResponse } from "../types/products";
import { productsService } from "../services/products/products.service";

export const UseHome = () => {
    const [isLoading, setisLoading] = useState(false);
    const [productList, setProductList] = useState<GetProductListResponse | []>([]);
    const [error, setError] = useState(false);
    const existProducts = !error && !isLoading && productList.length > 0;

    const getProducts = async () => {
      try {
        setError(false)
        setisLoading(true);
        const response = await productsService.productList();
        if (response) {
            setProductList(response);
        }
      } catch(e) {
        setError(true)
      } finally {
        setisLoading(false);
      }
    };

    
    useEffect(()=>{
        getProducts()
    }, [])

    return {
        isLoading,
        error,
        productList,
        existProducts
    }
}