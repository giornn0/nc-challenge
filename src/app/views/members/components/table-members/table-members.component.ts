import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../../../../models/member.model';

@Component({
  selector: 'app-table-members',
  templateUrl: './table-members.component.html',
  styleUrls: ['./table-members.component.scss']
})
export class TableMembersComponent implements OnInit {
  @Input()listMembers: Member[]=[]
  displayedColumns: string[] = ['name', 'lastName', 'address', 'ssn'];

  constructor() { }

  ngOnInit(): void {
  }

}
