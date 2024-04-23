import { TableProducts } from './productInterface';

export interface CartProduct extends TableProducts  {

    id: number;
    userId: number;
    date: string;
    product: Product[]
    total: number
}

interface Product{
    productId: number;
    quantity: number;
}