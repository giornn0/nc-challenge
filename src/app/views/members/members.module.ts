import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MembersRoutingModule } from './members-routing.module';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { FormMembersComponent } from './components/form-members/form-members.component';
import { TableMembersComponent } from './components/table-members/table-members.component';


@NgModule({
  declarations: [
    FormMembersComponent,
    TableMembersComponent,
    MainViewComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class MembersModule { }
