import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList/ProductList";
import { UseHome } from "../hooks/useHome";

export const HomeScreen = () => {
  const { isLoading, error, productList, existProducts } = UseHome();
  return (
    <>
      <Header />
      <Carousel />
      <ProductList existProducts={existProducts} productList={productList} error={error} isLoading={isLoading} />
      <Footer />
    </>
  );
};
