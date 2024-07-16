import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";

export const PrincipalNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="cart" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};
