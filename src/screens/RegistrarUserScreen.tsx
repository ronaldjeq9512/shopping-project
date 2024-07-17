
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { RegistrarUser } from "../components/RegistrarUser";
import { UseRegistrarUser } from "../hooks/useRegistrarUser";

export const RegistrarUserScreen = () => {
const { }  = UseRegistrarUser();
  return (
    <>

      <Header />
      <RegistrarUser/>
      <Footer />
    </>
  );
};
