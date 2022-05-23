import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { ProductListService } from 'src/app/services/product-list.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edite-product',
  templateUrl: './add-edite-product.component.html',
  styleUrls: ['./add-edite-product.component.scss']
})
export class AddEditeProductComponent implements OnInit {
  productForm!: FormGroup;
  submitted: boolean = false;
  isEdit:boolean = false;
  productId:any;
  constructor(private productListService: ProductListService,
    private formBilder: FormBuilder,
    private toster: ToastrService,
    private router: Router,
    private activeRoutr:ActivatedRoute,
    private http:HttpClient,
    private encryptDecrept:EncryptDecryptService) {
    this.productForm = this.formBilder.group({
      product_name: ["", Validators.required],
      product_description: ["", Validators.required],
      product_image: ["", Validators.required],
      product_status: ["", Validators.required]
    });
    this.activeRoutr.queryParams.subscribe((res:any)=>{
      if(Object.keys(res).length > 0){
        this.productId = res.productid;
        this.isEdit =true;
       this.productListService.getSingleProduct(this.productId).subscribe((res:any)=>{
         if(res.status =='success'){
           console.log(res);
           console.log(res.data.product_name);
           const data:any = res.data[0];
           this.productForm.patchValue({
            product_name: data.product_name,
            product_description:data.product_description,
            product_image: data.product_image,
            product_status:data.product_status
           })
         }
       })
      }
    })
  }

  ngOnInit(): void {
  }

  get fvalue() { return this.productForm.controls }

  ProductSubmited() {
    this.submitted = true;
    //console.log("ProductSubmited is submited");
    if (this.productForm.invalid) {
      return
    }
    if(this.isEdit){
      let payload: any = Object.assign({},this.productForm.value);
      payload['id'] = this.productId;
      console.log(payload);
      this.productListService.addEditeProduct(payload).subscribe((res: any) => {
        if (res.status == "success") {
          this.toster.success("Product updated successfully");
          this.router.navigate(["/main/product-list"]);
        } else if (res.status == "exist") {
          this.toster.error("Failed! Product already exist!")
        }
      })
    }else{
      const productFormData: any = this.productForm.value;
      // let payload: any = {
      //   product_name: this.encryptDecrept.encryptData(productFormData.product_name),
      //   product_description: this.encryptDecrept.encryptData(productFormData.product_description),
      //   product_image:  this.encryptDecrept.encryptData(productFormData.product_image),
      //   product_status: this.encryptDecrept.encryptData(productFormData.product_status)
      // };

      this.productListService.addEditeProduct(productFormData).subscribe((res: any) => {
        //console.log(res);
        if (res.status == "success") {
          this.toster.success("Product added successfully");
          this.router.navigate(["/main/product-list"]);
        } else if (res.status == "exist") {
          this.toster.error("Failed! Product already exist!")
        }
      })
    }
    
  }
}
