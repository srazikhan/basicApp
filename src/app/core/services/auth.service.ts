import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClent:HttpClient, private router:Router) { }
  
  signUp(formData:any):Observable<any>{
    return this.httpClent.post(environment.apiUrl+"auth/signUp",formData,{})
  }

  login(loginFormData:any):Observable<any>{
    return this.httpClent.post(environment.apiUrl+"auth/login",loginFormData,{})
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/auth/login"])
  }
}
