import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheticathedGuard } from 'src/app/guards/autheticathed.guard';
import { GetAllUsersResolver } from 'src/app/resolvers/users/get-all-users.resolver';
import { MainViewComponent } from './pages/main-view/main-view.component';

const routes: Routes = [
  {
    path:'',
    canActivate:[AutheticathedGuard],
    resolve:{users:GetAllUsersResolver},
    component:MainViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
