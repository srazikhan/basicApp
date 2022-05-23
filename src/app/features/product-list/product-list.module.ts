import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { AddEditeProductComponent } from './add-edite-product/add-edite-product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    ProductListComponent,
    
    AddEditeProductComponent,
         ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    SharedModule
  ]
})
export class ProductListModule { }
