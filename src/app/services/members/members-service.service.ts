import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiRouteEnums } from 'src/app/constants/api-route.enums';
import { Member } from 'src/app/models/member.model';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-responses.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpClient) {}
  getMembers(): Observable<Member[]> {
    return this.http
      .get<Member[]>(`${environment.apiUrl}/api/${ApiRouteEnums.Members}`);
  }
  pushMember(body: Member): Observable<any>{
    return this.http.post(`${environment.apiUrl}/api/${ApiRouteEnums.Members}`,body)
  }
}
