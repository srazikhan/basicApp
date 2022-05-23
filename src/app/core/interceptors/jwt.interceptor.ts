import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken: any = localStorage.getItem("token");
    if(jwtToken != null){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${jwtToken}` }
      });
    }
    return next.handle(request);
  }
}
