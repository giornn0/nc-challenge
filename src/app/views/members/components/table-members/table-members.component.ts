import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members/members-service.service';
import { Member } from '../../../../models/member.model';

@Component({
  selector: 'app-table-members',
  templateUrl: './table-members.component.html',
  styleUrls: ['./table-members.component.scss']
})
export class TableMembersComponent implements OnInit {
  @ViewChild('table')memberTable?: TableMembersComponent;
  @Input()listMembers: Member[]=[]
  displayedColumns: string[] = ['name', 'lastName', 'address', 'ssn'];

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    console.log(this.listMembers)
  }
  addNewValidated(newMember: Member){
    this.listMembers.push(newMember)
  }
}
