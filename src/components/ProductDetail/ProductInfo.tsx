import { useProductInfo } from '../../hooks/useProductInfo';

interface Product {
  image: string;
  title: string;
  description: string;
  price: number;
  id: string;
}

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product } : ProductInfoProps) => {
  const {quantity, handleDecrease, handleIncrease, handleRemove} = useProductInfo({product})

  return (
    <div className="card mb-4">
      <div className="card-body d-flex justify-content-between">
        <aside className="me-3">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid border rounded"
          />
        </aside>
        <article className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>S/. {product.price.toFixed(2)}</strong>
          </p>
          <div className="d-flex align-items-center flex-grow-1">
            <button className="btn btn-secondary" onClick={handleDecrease}>
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-secondary" onClick={handleIncrease}>
              +
            </button>
            <button className="btn btn-danger ms-3" onClick={handleRemove}>
              Eliminar
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
