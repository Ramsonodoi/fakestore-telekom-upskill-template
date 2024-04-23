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
   

    this.itemsInCart = this.cartService.itemsAddedToCart();
    if (this.itemsInCart.length > 0) {
      localStorage.setItem('itemsInCart', JSON.stringify(this.itemsInCart));
    }
    const itemsInCart= (localStorage.getItem('itemsInCart'));

    if (itemsInCart ){
      this.itemsInCart =JSON.parse(itemsInCart);
    }
  
    this.totalQuantity = this.itemsInCart.map(product => product.quantity);
  }

 
  public removeAllCartItems(){
    this.cartService.removeAllCartList();
  }

  public itemQuantity(product:TableProducts){
    return this.cartService.Quantity(product);
  }
   

  public increaseQuantity(index: number): void {
    this.totalQuantity[index]++;
  }

  public decreaseQuantity(index: number): void {
    if (this.totalQuantity[index] > 0) {
      this.totalQuantity[index]--;
    }
  }

  public removeCartItem(product: TableProducts): void {

    const index = this.itemsInCart.indexOf(product);
    if (index !== -1) {
      this.itemsInCart.splice(index , 1);
      this.totalQuantity.splice(index , 1);
    }
  }
}