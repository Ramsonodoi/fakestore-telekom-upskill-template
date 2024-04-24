import { CartService } from './../../../core/service/cart/cart.service';
import { Component,  OnInit } from '@angular/core';
import { TableProducts } from 'src/app/core/models/interfaces/productInterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public totalQuantity: number[] = [];

  
  public itemsInCart:TableProducts[] =[];
   
  public constructor(private cartService: CartService){}


  public ngOnInit(): void {
    const cartData = localStorage.getItem('cartList');
    if (cartData){
      this.itemsInCart =JSON.parse(cartData);
    } 

  
    this.totalQuantity = this.itemsInCart.map(product => product.quantity);

  }



 
   

  public increaseQuantity(products:TableProducts, index: number): void {
    const cartQuantity= this.totalQuantity[index]++;



  }

  public decreaseQuantity(products:TableProducts,index: number): void {
    if (this.totalQuantity[index] > 0) {
      this.totalQuantity[index]--;
    }
   
  }

  public removeCartItem(product: TableProducts): void {
    this.itemsInCart = this.itemsInCart.filter((cartItem: TableProducts) => {
      return product.id !== cartItem.id;
    });

  

    localStorage.setItem('cartList', JSON.stringify(this.itemsInCart));


  }

}