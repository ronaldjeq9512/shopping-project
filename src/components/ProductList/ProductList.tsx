import { Product } from "../../types/products";
import { Card } from "../Card";
import { ErrorProductList } from "../Error/ErrorProductList";
import { Loader } from "../Loader/Loader";

interface ProductListProps {
  isLoading: boolean;
  existProducts: boolean;
  productList: Product[];
  error: boolean;
}

export const ProductList = ({
  isLoading,
  existProducts,
  productList,
  error,
}: ProductListProps) => {
  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center my-4 gap-3">
          <Loader />
          <Loader />
          <Loader />
        </div>
      )}
      {existProducts && (
        <section className="d-flex my-4 flex-wrap justify-content-center align-items-center">
          {productList.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              id={product.id}
            />
          ))}
        </section>
      )}
      {error && <ErrorProductList />}
    </>
  );
};
