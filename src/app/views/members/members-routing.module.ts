import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTokenResolver } from 'src/app/resolvers/auth/get-token.resolver';
import { GetAllMembersResolver } from 'src/app/resolvers/members/get-all-members.resolver';
import { MainViewComponent } from './pages/main-view/main-view.component';

const routes: Routes = [
  {
    path:'',
    resolve:{token:GetTokenResolver},
    component:MainViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
