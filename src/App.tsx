import './App.css';
import { PrincipalNavigator } from './navigators/PrincipalNavigator';
import { CartProvider } from './providers/CartProvider';
import { UserProvider } from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <PrincipalNavigator />
      </CartProvider>
    </UserProvider>

)
}

export default App;
