import { ProductsService } from 'src/app/core/service/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/interfaces/productInterface';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productDetails={
    id: 0,
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0   
    }
  }; 

  public ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.productService.getSingleProduct(id).subscribe((response) =>{
          this.productDetails = response as Product;
        });
      }
    });
    
  }
  public constructor(private router: ActivatedRoute, private productService: ProductsService){}
}
