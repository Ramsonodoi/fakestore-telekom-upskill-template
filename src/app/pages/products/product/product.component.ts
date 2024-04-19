import { Component, OnInit } from '@angular/core';
import { Product, TableProducts } from 'src/app/core/models/interfaces/productInterface';
import { ProductsService } from 'src/app/core/service/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: TableProducts[] = [];
  public constructor(private product: ProductsService){
  }
  public ngOnInit(): void {
    // this.getAllProducts();
    this.product.getAllProducts().subscribe(
      (data) => {
        this.products =data.normalizedProductsDetails;
        console.log(this.products);
      }
    );
  }
  

  // public getAllProducts() {
  //   this.product.getAllProducts().subscribe(
  //     (data) => {
  //       this.products =data;
  //     },
  //     (error)=> {
  //       console.log(error);
  //     }
  //   );
  // }


}
