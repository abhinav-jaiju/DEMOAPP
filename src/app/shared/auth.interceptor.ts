import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Inetercepting Here...")

    // token variable
    let token = sessionStorage.getItem('JWTTOKEN');


    if(sessionStorage.getItem('USERNAME') && sessionStorage.getItem('JWTTOKEN')){
      request  = request.clone({
        //set Header
        setHeaders:{

          Authorization:`Bearer ${token} `
        }
      })
    }
    return next.handle(request);
  }
}
