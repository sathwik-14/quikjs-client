import { Routes } from '@angular/router';
import { dashboardGuard } from './pages/dashboard/dashboard.guard';
import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

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
    loadChildren: () =>
      import('./pages/home/home.module').then((e) => e.HomeModule),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((e) => e.LoginComponent),
  },
  {
    path: 'dashboard',
    resolve: {
      user: () => inject(AuthService).user$
    },
    canActivate: [dashboardGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((e) => e.DashboardModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
