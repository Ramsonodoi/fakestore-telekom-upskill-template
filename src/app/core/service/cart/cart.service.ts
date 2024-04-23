
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

 

  public getProducts(){
    return this.productList.asObservable();
  }

  public setProduct(product :CartProduct[] ) {
   
    this.productList.next(product);
  }
  
  public addtoCart(product: TableProducts){
    this.cartList.push(product);
 
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
}
