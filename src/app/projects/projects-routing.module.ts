import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './projects.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
  {path:'',component:ProjectsComponent},
  {path:'new',component:NewProjectComponent},
  {path:'view',component:ViewProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
