import { Cart } from "../components/Cart";
import { EmptyProducts } from "../components/Error/EmptyProducts";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { OrderForm } from "../components/OrderForm";
import { useCheckout } from "../hooks/useCheckoutScreen";

export const CheckoutScreen: React.FC = () => {
  const { products } = useCheckout();

  return (
    <>
      <Header />
      <div className="container mt-5">
        {products.length > 0 ? (
          <div className="row">
            <Cart />
            <OrderForm />
          </div>
        ) : (
          <EmptyProducts />
        )}
      </div>
      <Footer />
    </>
  );
};
