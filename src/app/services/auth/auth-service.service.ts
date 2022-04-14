import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { LogBody } from '../../models/log.model';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/api-responses.model';
import { environment } from 'src/environments/environment';
import { ApiRouteEnums } from 'src/app/constants/api-route.enums';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(credentials: LogBody): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.apiUrl}/${ApiRouteEnums.Auth}`,credentials)
  }
}
