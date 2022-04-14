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
export class MembersServiceService {
  constructor(private http: HttpClient) {}
  getMembers(): Observable<Member[]> {
    return this.http
      .get<ApiResponse<Member[]>>(`${environment.apiUrl}/api/${ApiRouteEnums.Members}`)
      .pipe(map((response) =>{
        console.log(response)
        return response.data
      }));
  }
}
