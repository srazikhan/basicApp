import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private authService:AuthService,private toster:ToastrService){}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error.status)
          if(error.status == 401){
            this.toster.error("Session is expired, please login again.")
           this.authService.logout()
          }
          // let errorMsg = '';
          // if (error.error instanceof ErrorEvent) {
          //   console.log('this is client side error');
          //   errorMsg = `Error: ${error.error.message}`;
          // }
          // else {
          //   console.log('this is server side error');
          //   errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          // }
          // console.log(errorMsg);
          return throwError(error);
        })
      )
  }
}