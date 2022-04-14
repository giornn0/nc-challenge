import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Member } from 'src/app/models/member.model';
import { MembersServiceService } from '../../../../services/members/members-service.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  listMembers: Member[] = []
  constructor(private activatedRoute: ActivatedRoute, private membersService:MembersServiceService ) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(first()).subscribe(routeData=>{
      const {token} = routeData;
      localStorage.setItem('token',token)
      this.membersService.getMembers().subscribe(res=>{return 
        this.listMembers =  res
      })
    })
  }

}
