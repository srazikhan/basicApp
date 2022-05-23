import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ProductListService } from 'src/app/services/product-list.service';
import{UsersService} from '../../services/users.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // encapsulation:ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  dataCount:any[] = [];

  constructor(private usersService:UsersService,
    private productService:ProductListService ) { }

  ngOnInit(): void {
    this.getUsersAndProducts()
  }

  getUsersAndProducts(){
  const userApi = this.usersService.getUsers();
  const productApi = this.productService.productList();

  forkJoin([userApi,productApi]).subscribe((res:any)=>{
    console.log(res)
    this.dataCount = [
      { name: "Users", value: res[0].data.length },
      { name: "Productss", value: res[1].data.length },
    ]
  })
  }
}
