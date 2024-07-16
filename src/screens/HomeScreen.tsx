import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { ErrorProductList } from "../components/Error/ErrorProductList";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader/Loader";
import { UseHome } from "../hooks/useHome";

export const HomeScreen = () => {
  const { isLoading, error, productList, existProducts } = UseHome();
  return (
    <>
      <Header />
      <Carousel />
      {isLoading && (
        <div className="d-flex justify-content-center my-4 gap-3">
          <Loader />
          <Loader />
          <Loader />
        </div>
      )}
      {existProducts && (
        <section className="d-flex my-4 flex-wrap justify-content-center align-items-center">
          {productList.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </section>
      )}
      {error && (
          <ErrorProductList />
        )
      }
      <Footer />
    </>
  );
};
