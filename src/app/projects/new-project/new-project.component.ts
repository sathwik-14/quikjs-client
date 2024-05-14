import { Component } from '@angular/core';
import { StoreService } from '../../store.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss',
})
export class NewProjectComponent {
  presets:any[];



  selectedPreset = -1;

  constructor(public store: StoreService) {
    this.presets = store.presets
  }

  saveProjectDetails(projectData: any) {
    console.log(projectData.value);
    this.store.dataStore().push(projectData.value);
  }
}
