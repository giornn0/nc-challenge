import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RouteEnums } from './constants/route.enums';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    redirectTo:RouteEnums.Users,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: RouteEnums.Users,
    loadChildren: () =>
      import('src/app/views/users/users.module').then((mod) => mod.UsersModule),
  },
  {
    path: '**',
    redirectTo: 'login',
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
