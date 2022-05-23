import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private httpClient: HttpClient) { }

  addEditeProduct(formData: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "product/addAndUpdateProduct", formData, {});
  }

  productList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "product/getAllProducts", {})
  }

  deleteProduct(productIpd: any): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "product/deleteProduct/" + productIpd, {})
  }
  getSingleProduct(productId: any): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "product/getSingleProduct/" + productId, {})
  }
}
