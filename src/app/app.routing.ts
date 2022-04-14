import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutheticathedGuard } from './guards/autheticathed.guard';
import { HasTokenGuard } from './guards/has-token.guard';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    canActivate:[HasTokenGuard],
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'users',
    canActivate:[AutheticathedGuard],
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
