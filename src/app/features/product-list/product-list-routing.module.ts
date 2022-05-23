import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditeProductComponent } from './add-edite-product/add-edite-product.component';
import { ProductListComponent } from './product-list.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: "add-edite-product", component: AddEditeProductComponent,data : {title:'Add-Edite-Product'} },
  {path:"view-product", component:ViewProductComponent,data : {title:'View-Product'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
