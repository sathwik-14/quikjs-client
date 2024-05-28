import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'oauth/callback',
    loadComponent: () =>
      import('./callback/callback.component').then((e) => e.CallbackComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((e) => e.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((e) => e.LoginComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((e) => e.DashboardModule),
  },
{
  path:'**',
  pathMatch: 'full',
  redirectTo: 'home'
}

];
