

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
  public itemsInLocalStorage :TableProducts[] = [];


  
  public addToCart(product: TableProducts){

    this.cartList.push(product);
    this.cartList =  this.cartList.map((items)=>{
      if (items.id === product.id){
        return{...items, quantity: items.quantity +1 };
         
      }
      return{...items};
    });

    const cartItems =this.uniqueArray(this.cartList);
    this.cartList = cartItems;
    
    const cartData = localStorage.getItem('cartList');
    if (cartData){
      this.itemsInLocalStorage =JSON.parse(cartData);
    } 


    this.cartList.forEach(item => {
      const existingItem = this.itemsInLocalStorage.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else{
        const newItem = {...item}
        this.itemsInLocalStorage.push(newItem);
      }
    });


     
  
    localStorage.setItem('cartList', JSON.stringify(this.itemsInLocalStorage));
  }
  
  private uniqueArray(array: TableProducts[]): TableProducts[] {
    return array.filter((item, index, self) => 
      index === self.findIndex((t) => (
        t.id === item.id
      ))
    );
  }
  

  

  public itemsAddedToCart(){
    return this.cartList;
  }


 




}
