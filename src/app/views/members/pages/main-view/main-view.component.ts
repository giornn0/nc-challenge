import {ViewChild, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Member } from 'src/app/models/member.model';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { MembersService } from 'src/app/services/members/members-service.service';
import { MemberControls } from '../../../../models/member.model';
import { TableMembersComponent } from '../../components/table-members/table-members.component';
import { errorAlert } from '../../../../utils/error-message';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  @ViewChild('table') memberTable?: TableMembersComponent;

  chargedSSN: MemberControls.SSN[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.pipe(first()).subscribe((routeData) => {
      const { token } = routeData;
      localStorage.setItem('token', token);
    });
  }
  addNewMember(member: Member) {
    this.memberTable?.listMembers.push(member);
    this.memberTable?.refetch()
  }
}
