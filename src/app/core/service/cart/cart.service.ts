import { Product } from 'src/app/core/models/interfaces/productInterface';

import { Injectable } from '@angular/core';
import { CartProduct } from '../../models/interfaces/cartInterface';
import { BehaviorSubject } from 'rxjs';
import { TableProducts } from '../../models/interfaces/productInterface';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartList:TableProducts[] = [];
  public productList = new BehaviorSubject<CartProduct[]>([]);


  
  public addToCart(product: TableProducts){

    this.cartList.push(product);
    this.cartList =  this.cartList.map((items)=>{
      if (items.id === product.id){
        return{...items, quantity: items.quantity +1 };
         
      }
      return{...items};
    });

    console.log(this.cartList,'detail');
    const cartItems =this.uniqeArray(this.cartList);
    this.cartList = cartItems;
    
  
    console.log(cartItems, 'cart');
     
  }

  public uniqeArray(arr:TableProducts[]) {
    return arr.filter((obj, index, self) => 
      index === self.findIndex((o) => 
        o.id === obj.id
      )
    );
  }

  public itemsAddedToCart(){
    return this.cartList;
  }
 

  public removeCartList(product:TableProducts){
   
    this.cartList.map((cartItem:TableProducts, index:number)=>{
      if (product.id === cartItem.id){
        this.cartList.splice(index, 1);
      }
    });
    localStorage.setItem('itemsInCart',JSON.stringify(this.cartList) );
  }

  public removeAllCartList(){
    this.cartList=[];
  
  }

  public Quantity(product: TableProducts){
    const quantityItem = this.cartList.filter(cartItem => product.id === cartItem.id);
    const quantity = quantityItem.length;
    return quantity;
  }
}
