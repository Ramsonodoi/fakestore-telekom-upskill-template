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
    title: string;
    price: string;
    category: string;
    image: string;
}