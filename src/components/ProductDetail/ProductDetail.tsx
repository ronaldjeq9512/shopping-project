import { Product } from "../../types/products";
import { ErrorProductDetail } from "../Error/ErrorProductDetail";
import { ProductInfo } from "./ProductInfo";

interface ProducDetailProps {
    isSearching: boolean;
    productDetail: Product | undefined
}

export const ProductDetail = ({isSearching, productDetail }: ProducDetailProps) => {
    return (
       <section className="my-4">
        { isSearching && (
            <div className="text-center">
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
        )
        }
        { productDetail? (
            <ProductInfo product={productDetail} />
        ) : (
            <ErrorProductDetail />
        )

        }
       </section>
    )
}