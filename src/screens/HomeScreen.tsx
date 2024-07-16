import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { UseHome } from "../hooks/useHome";

export const HomeScreen = () => {
  const { isLoading, error, productList, existProducts } = UseHome();
  return (
    <>
      <Header />
      <Carousel />
      {existProducts && (
          <section className='d-flex flex-wrap justify-content-center align-item-center'>
              {productList.map(product => (
                <Card key={product.id} image={product.image} title={product.title} 
                  description={product.description} price={product.price}  />
              ))}
          </section>
        )
      }
      <Footer />
    </>
  );
};
