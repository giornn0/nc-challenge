import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LogBody } from 'src/app/models/log.model';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetTokenResolver implements Resolve<string> {
  constructor(private authService : AuthServiceService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    const body: LogBody = environment.credentials
    return this.authService.login(body).pipe(map(logResponse=>(logResponse.token)))
  }
}
