import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(public store:StoreService,public router:Router){}

  getProjectDetails(index:number) {
    console.log(this.store.dataStore()[index])
  }
}
