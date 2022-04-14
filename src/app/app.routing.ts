import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RouteEnums } from './constants/route.enums';

export const routes: Routes = [
  {
    path: 'login',
    redirectTo:RouteEnums.Members,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: RouteEnums.Members,
    loadChildren: () =>
      import('src/app/views/members/members.module').then((mod) => mod.MembersModule),
  },
  {
    path: '**',
    redirectTo:RouteEnums.Members,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
