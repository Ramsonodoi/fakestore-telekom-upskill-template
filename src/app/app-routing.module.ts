import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/products/product/product.component';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'product-page', component:ProductComponent},
  {path: 'cart', component:CartComponent},
  {path: 'product-detail', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
