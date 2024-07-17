import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { useProductDetail } from "../hooks/useProductDetail";
import { ProductDetail } from "../components/ProductDetail";
import { ProductList } from "../components/ProductList/ProductList";
export const ProductDetailScreen = () => {
  const { productId } = useParams();
  const { isSearching, productDetail, error, existProducts, isLoading, productList} = useProductDetail({productId: productId??''})
  console.log({productDetail})
  return (
    <>
      <Header />
      <ProductDetail productDetail={productDetail} isSearching={isSearching} />
      <ProductList existProducts={existProducts} productList={productList} error={error} isLoading={isLoading} />
      <Footer />
    </>
  );
};
