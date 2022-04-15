import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material modules
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



import { MembersRoutingModule } from './members-routing.module';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { FormMembersComponent } from './components/form-members/form-members.component';
import { TableMembersComponent } from './components/table-members/table-members.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormMembersComponent,
    TableMembersComponent,
    MainViewComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
  ]
})
export class MembersModule { }
