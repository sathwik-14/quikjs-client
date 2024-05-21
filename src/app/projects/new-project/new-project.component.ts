import { Component } from '@angular/core';
import { StoreService } from '../../store.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss',
})
export class NewProjectComponent {
  presets: any[];

  projectDetails = {
    name: '',
    description: '',
    orm: 'sequelize',
    database: '',
    logging: true,
    authentication: false,
    api_documentation: true,
    rbac: false,
  };

  selectedPreset = -1;

  constructor(
    public store: StoreService,
    private _http: HttpClient,
    private _router: Router,
  ) {
    this.presets = store.presets;
  }

  saveProjectDetails(projectData: any) {
    console.log(projectData.value);
    this.store.dataStore().push(projectData.value);
  }

  generate(data: any) {
    console.log(data.value);
    this._http.get('http://localhost:3001/generate').subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(['/projects/view']);
      },
      error: (err) => console.log(err),
    });
  }
}
