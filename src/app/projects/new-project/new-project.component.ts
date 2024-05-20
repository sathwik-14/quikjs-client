import { Component } from '@angular/core';
import { StoreService } from '../../store.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import main from 'quikjs'; 

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule, CommonModule, CodemirrorModule],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss',
})
export class NewProjectComponent {
  presets:any[];

  projectDetails = {
    name:'',
    description:'',
    orm: 'sequelize',
    database: '',
    logging:true,
    authentication:false,
    api_documentation:true,
    rbac:false
  }

  selectedPreset = -1;

  constructor(public store: StoreService) {
    this.presets = store.presets
  }

  saveProjectDetails(projectData: any) {
    console.log(projectData.value);
    this.store.dataStore().push(projectData.value);
  }

  generate (data:any) {
    console.log(main);
    
  }
}
