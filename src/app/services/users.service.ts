import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<any>{
    // const token:any = localStorage.getItem("token")
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', token);
    return this.httpClient.get("http://localhost:8080/api/users/getAllUser",{})
  }
}
