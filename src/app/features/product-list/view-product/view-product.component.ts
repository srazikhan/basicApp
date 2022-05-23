import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  viewProductList: any;
  productId:any;
  constructor(private activateroute: ActivatedRoute,
    private ptoductService: ProductListService,
    private  encryptDecryptService:EncryptDecryptService) {
    this.activateroute.queryParams.subscribe((res: any) => {
      console.log(res.productid);
      this.productId = this.encryptDecryptService.decryptData(res.productid);
      
      this.ptoductService.getSingleProduct(this.productId).subscribe((res:any)=>{
        console.log(res);
        this.viewProductList = res.data[0];
      })
    })
  }

  ngOnInit(): void {
  }

}
