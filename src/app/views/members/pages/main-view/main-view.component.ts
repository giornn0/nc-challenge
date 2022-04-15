import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Member } from 'src/app/models/member.model';
import { MembersService } from 'src/app/services/members/members-service.service';
import { MemberControls } from '../../../../models/member.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  listMembers: Member[] = []
  chargedSSN: MemberControls.SSN[]=[];
  constructor(private activatedRoute: ActivatedRoute, private membersService:MembersService ) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(first()).subscribe(routeData=>{
      const {token} = routeData;
      localStorage.setItem('token',token)
      this.membersService.getMembers().subscribe(res=>{
        this.listMembers =  res
        this.chargedSSN = res.map(member=>member.ssn as MemberControls.SSN)
      })
    })
  }

}
