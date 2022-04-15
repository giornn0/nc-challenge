import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticathedInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const requestSend = request.clone({headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'*/*',
      'Authorization':token?`Bearer ${token}`:'',
    })})
    return next.handle(requestSend);
  }
}
