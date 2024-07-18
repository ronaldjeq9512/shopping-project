import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { CheckoutScreen } from "../screens/CheckoutScreen";
import { RegistrarUserScreen } from "../screens/RegistrarUserScreen";


export const PrincipalNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="detail/:productId" element={<ProductDetailScreen />} />
        <Route path="checkout" element={<CheckoutScreen />} />     
        <Route path="registraruser" element={<RegistrarUserScreen />} />
      </Routes>
    </Router>
  );
};
