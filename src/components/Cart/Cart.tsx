import { useCart } from '../../hooks/useCart';
import { CartItem } from './CartItem';

export const Cart = () => {
  const {handleDecrease, handleIncrease, handleRemove, products, totalPrice, deliveryCost, finalTotal} = useCart()

  return (
    <aside className="col-md-6 mb-4">
      <h2>Carrito de Compras</h2>
      {products.map(product => (
        <CartItem
          key={product.id}
          product={product}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      ))}
      <div className="mt-4">
        <h4>Subtotal: S/. {totalPrice.toFixed(2)}</h4>
      </div>
      <div className="mt-2">
        <h4>Delivery: S/. {deliveryCost.toFixed(2)}</h4>
      </div>
      <div className="mt-4">
        <h2>Total: S/. {finalTotal.toFixed(2)}</h2>
      </div>
    </aside>
  );
};
