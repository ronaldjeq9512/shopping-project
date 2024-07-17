import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";


export const PrincipalNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="detail/:productId" element={<ProductDetailScreen />} />
      </Routes>
    </Router>
  );
};
