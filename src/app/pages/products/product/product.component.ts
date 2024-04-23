import { CartService } from './../../../core/service/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/core/models/interfaces/cartInterface';
import {  TableProducts } from 'src/app/core/models/interfaces/productInterface';
import { ProductsService } from 'src/app/core/service/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: TableProducts[] = [];
  public search = '';
  public totalProducts = 0;
  public  filteredProducts :TableProducts[] = [];
  public constructor(private productService: ProductsService, private cartService: CartService, private route: Router){
  }
  public ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products =data.normalizedProductsDetails;
        this.filteredProducts = this.products;
      }
    );
    const storedItems = localStorage.getItem('itemsInCart');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      this.totalProducts = parsedItems.length;
    }
    else {
      this.totalProducts  =this.cartService.itemsAddedToCart().length;
    }

  }
  
  public navigateToCartPage(){
    this.route.navigate(['cart']);
  }

  public onChange() {
    this.filteredProducts = this.products.filter(product => 
      product.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }
  
  public addToCart(product:TableProducts){
    this.cartService.addtoCart(product);
    this.totalProducts =this.cartService.itemsAddedToCart().length;
  }

  public navigateToProductPage(productId: number) {
    this.route.navigate(['product-detail'], { queryParams: { id: productId } });
  }
  
  

}