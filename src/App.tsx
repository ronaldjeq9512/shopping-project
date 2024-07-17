import './App.css';
import { PrincipalNavigator } from './navigators/PrincipalNavigator';
import { CartProvider } from './providers/CartProvider';

function App() {
  return (
    <CartProvider>
      <PrincipalNavigator />
    </CartProvider>
)
}

export default App;
