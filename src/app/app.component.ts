import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TemplateService } from './template.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quikjs-client';
  isProjectSetup = true;
  sampleData: any;

  constructor(readonly samples: TemplateService) {
    this.sampleData = samples.samples;
  }

  saveProjectDetails(projectData: any) {
    console.log(projectData.value);
    this.isProjectSetup = true;
  }

  addTable(schemData: any) {
    console.log(schemData.value);
  }
}
