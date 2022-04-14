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
    const headers = new HttpHeaders()
    headers.set('Content-Type','application/json')
    headers.set('Accept','*/*')
    const token = localStorage.getItem('token');
    headers.set('Authorization',`Bearer ${token}`)
    request = request.clone({headers})
    return next.handle(request);
  }
}
