import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import types from '../constants';
import { TemplateService } from '../template.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'quikjs-client';
  showProjectForm = false;
  sampleData: any;
  showSchemaForm = false;
  tables: any[] = [];
  datatypes:any = types;

  constructor(readonly samples: TemplateService,public store:StoreService) {
    this.sampleData = samples.samples;
  }

  saveProjectDetails(projectData: any) {
    console.log(projectData.value);
    this.showProjectForm = true;
    this.store.dataStore().push(projectData.value)
  }

  getProjectDetails(index:number) {
    console.log(this.store.dataStore()[index])
    this.showSchemaForm = true;
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
}
