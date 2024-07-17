
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header";
import { Login } from "../components/Login";
import { UseLogin } from "../hooks/useLogin";

export const LoginScreen = () => {
const { }  = UseLogin();
  return (
    <>

      <Header />
      <Login />
      <Footer />
    </>
  );
};
