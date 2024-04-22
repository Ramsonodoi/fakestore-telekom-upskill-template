import { CartService } from './../../../core/service/cart/cart.service';
import { Component,  OnInit } from '@angular/core';
import { TableProducts } from 'src/app/core/models/interfaces/productInterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public itemsInCart:TableProducts[] | undefined;
   
  public constructor(private cartService: CartService){}


  public ngOnInit(): void {
   

    this.itemsInCart = this.cartService.itemsAddedToCart();
    if (this.itemsInCart.length > 0) {
      localStorage.setItem('itemsInCart', JSON.stringify(this.itemsInCart));
    }
    this.itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')??'');


  }

  public removeCartItem(item: TableProducts){ 
    this.cartService.removeCartList(item);
    this.itemsInCart = this.cartService.itemsAddedToCart();
 
  }

  public removeAllCartItems(){
    this.cartService.removeAllCartList();
  }
}
