export interface Product {
    image: string;
    title: string;
    description: string;
    price: string;
    id: string;
}

export type GetProductListResponse = Product[]