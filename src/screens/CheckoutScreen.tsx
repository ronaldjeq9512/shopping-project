import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { OrderForm } from "../components/OrderForm";

export const CheckoutScreen: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Cart />
          <OrderForm />
        </div>
      </div>
      <Footer />
    </>
  );
};
