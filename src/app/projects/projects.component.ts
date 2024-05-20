import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(public store:StoreService,public router:Router){}

  getProjectDetails(index:number) {
    console.log(this.store.dataStore()[index])
  }
}
