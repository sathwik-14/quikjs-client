import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((e) => e.HomeComponent),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((e) => e.ProjectsModule),
  },
];
