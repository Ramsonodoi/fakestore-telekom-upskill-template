export interface TableProducts extends BasicProduct {
  count:number,
    rate:number

}

export interface Product extends  BasicProduct {
    rating:{
        count:number,
        rate:number
    }
}

export interface BasicProduct{
    id:number;
    title: string;
    price: string;
    category: string;
    image: string;
    description:string;
}

export interface ProductDetails {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  