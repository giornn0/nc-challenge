import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import {Input,  Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { debounceTime,finalize } from 'rxjs/operators';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { MembersService } from 'src/app/services/members/members-service.service';
import { errorAlert } from 'src/app/utils/error-message';
import { Member, MemberControls } from '../../../../models/member.model';
import { memberProps } from '../../constants/props-array';

@Component({
  selector: 'app-table-members',
  templateUrl: './table-members.component.html',
  styleUrls: ['./table-members.component.scss']
})
export class TableMembersComponent implements OnInit,OnDestroy {

  displayedColumns: MemberControls[] = memberProps
  subjectForRefetch: Subject<boolean> = new Subject();
  searching=false;
  listMembers: Member[] = [];

  constructor(private membersService: MembersService,private alertsService: AlertsService) {
    
  }

  ngOnInit(): void {
    this.getList()
    this.subjectForRefetch.pipe(debounceTime(1200000)).subscribe(_=>{
      this.getList()
    })
    this.refetch();
  }

  refetch(){
    this.subjectForRefetch.next(true)
  }

  ngOnDestroy(){
    this.subjectForRefetch.unsubscribe();
  }

  getList(){
    this.searching = true
      this.membersService.getMembers().pipe(finalize(()=>{
        this.refetch();
        this.searching=false
      })).subscribe(
        res=>this.listMembers = res,
        err=>this.alertsService.setAlert(errorAlert('Error while trying to get members list'))
      )
  }
}
