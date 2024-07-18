import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { useProductDetail } from "../hooks/useProductDetail";
import { ProductDetail } from "../components/ProductDetail";
import { ProductList } from "../components/ProductList/ProductList";
export const ProductDetailScreen = () => {
  const { productId } = useParams();
  const { isSearching, productDetail, error, existProducts, isLoading, productList} = useProductDetail({productId: productId??''})
  return (
    <>
      <Header />
      <ProductDetail productDetail={productDetail} isSearching={isSearching} />
      <ProductList haveToReplace existProducts={existProducts} productList={productList} error={error} isLoading={isLoading} />
      <Footer />
    </>
  );
};
