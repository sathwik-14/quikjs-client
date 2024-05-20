import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {path:'', redirectTo:'projects', pathMatch: 'full'},
  {path:'projects',component:ProjectsComponent},
  {path:'projects/new',component:NewProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
