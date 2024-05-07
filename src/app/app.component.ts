import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TemplateService } from './template.service';
import types from './constants';
import { HeaderComponent } from './header/header.component';
import quik from 'quikjs';

interface Table {
  name: string;
  description: string;
  junctionTable: boolean;
  fields: any[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'quikjs-client';
  isProjectSetup = false;
  sampleData: any;
  tables: any[] = [];
  datatypes:any = types;

  constructor(readonly samples: TemplateService) {
    this.sampleData = samples.samples;
  }

  saveProjectDetails(projectData: any) {
    console.log(projectData.value);
    this.isProjectSetup = true;
  }

  addTable() {
    this.tables.unshift({ name: '', junctionTable: false, fields: [] });
  }

  addField(index: number) {
    this.tables[index].fields.unshift({
      name: '',
      type: '',
      primaryKey: false,
      autoIncrement: false,
      defaultValue: '',
      isUnique:false,
      isNull: false,
      foreignKey: false,
      refTable: '',
      refCol: '',
      relType: '',
    });
  }

  removeTable(index:number) {
    this.tables.splice(index)
  }

  async generate() {
    await quik();
  }
}
