import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'src/app/components/dialog/confirm-dialog/confirm-dialog.component';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { ProductListService } from 'src/app/services/product-list.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ["sno",'product_name', 'product_description', 'product_image', 'product_status',"action"];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild("content",{static:true}) content!:ElementRef;
  allProdectList: any;
  productSingaleDetails:any;
  constructor(private productListService: ProductListService,
    private toster: ToastrService,
    private router: Router,
    private activateroute: ActivatedRoute,
    private encryptDecryptService: EncryptDecryptService,
    public dialog: MatDialog,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.productListService.productList().subscribe((res: any) => {
      // console.log(res);
      this.allProdectList = res.data;
      this.dataSource = new MatTableDataSource( res.data);
      this.dataSource.paginator = this.paginator;
    })
  }
  editProduct(id: any) {
    this.router.navigate(["/main/product-list/add-edite-product"],
      { queryParams: { productid: id } })
  }
  viewProduct(id: any, product:any) {
   // this.productSingaleDetails = product
    this.productListService.getSingleProduct(id).subscribe((res:any)=>{
      console.log(res);
      this.productSingaleDetails = res.data[0];
    })
    this.modalService.open(this.content, { size: 'md', modalDialogClass: 'dark-modal' });
    // let encriptedID = this.encryptDecryptService.encryptData(id);
    // this.router.navigate(["/main/product-list/view-product"],
    //   { queryParams: { productid: encriptedID } })
  }
  deleteProductList(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result:any) => {
      if (result == true) {
        this.productListService.deleteProduct(id).subscribe((res: any) => {
          if (res.status == "success") {
            this.toster.success("Record deleted successfully");
            this.getProductList()
          }
        })
      }
    });

  }
}
