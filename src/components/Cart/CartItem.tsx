import { ProductCart } from '../../types/cart';

interface CartItemProps {
  product: ProductCart;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
}

export const CartItem = ({ product, onIncrease, onDecrease, onRemove }: CartItemProps) => (
  <div className="d-flex gap-5 align-items-center my-4">
    <div>
      <img src={product.image} alt={product.title} className="img-fluid" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
    </div>
    <div>
      <h5>{product.title}</h5>
      <p>S/. {product.price.toFixed(2)} x {product.quantity}</p>
      <div className="d-flex align-items-center">
        <button className="btn btn-secondary" onClick={() => onDecrease(product.id)}>
          -
        </button>
        <span className="mx-2">{product.quantity}</span>
        <button className="btn btn-secondary" onClick={() => onIncrease(product.id)}>
          +
        </button>
        <button className="btn btn-danger ms-3" onClick={() => onRemove(product.id)}>
          Quitar
        </button>
      </div>
    </div>
  </div>
);
