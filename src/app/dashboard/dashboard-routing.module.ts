import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadComponent: () =>
      import('./dashboard.component').then((e) => e.DashboardComponent),
    children: [
      {
        path:'',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../projects/projects.module').then((e) => e.ProjectsModule),
      },
      {
        path: 'schemas',
        loadComponent: () =>
          import('../schemas/schemas.component').then((e) => e.SchemasComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
