import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { APIConstant } from '../../constant/APIConstant';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/interfaces/productInterface';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private products = `${environment.apiBaseUrl}${APIConstant.products.getAllProducts}`;

  private constructor(private http:HttpClient) {
    //
  }

  public getAllProducts() {
    return this.http.get<Product[]>(`${this.products}`).pipe(
      map((products)=>{
        const productDetails = products;

        const normalizedProductsDetails = productDetails.map((products)=>({
          title:products.title,
          price: products.price,
          image: products.image,
          category:products.category,
          rate:products.rating?.rate,
          count:products.rating?.count,
          description:products?.description,
          id: products?.id
        }));

        return {
          normalizedProductsDetails: normalizedProductsDetails,
          originalProductDetail: productDetails
        };
      })
    );
  }
  public getSingleProduct(id: number){
    return this.http.get(this.products + `/${id}`);
  }
}
