export interface Product {
    image: string;
    title: string;
    description: string;
    price: number;
    id: string;
}

export type GetProductListResponse = Product[]