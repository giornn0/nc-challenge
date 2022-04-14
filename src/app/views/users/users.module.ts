import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { MainViewComponent } from './pages/main-view/main-view.component';


@NgModule({
  declarations: [
    FormUsersComponent,
    TableUsersComponent,
    MainViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
