import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import types from '../../constants';
import { TemplateService } from '../../template.service';
import { StoreService } from '../../store.service';
import { FeaturesComponent } from './features/features.component';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { NgxMeteorsComponent } from '@omnedia/ngx-meteors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, FeaturesComponent, NgxBorderBeamComponent, NgxMeteorsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'quikjs-client';
  showProjectForm = false;
  sampleData: any;
  showSchemaForm = false;
  tables: any[] = [];
  datatypes: any = types;

  constructor(
    readonly samples: TemplateService,
    public store: StoreService,
    public router: Router,
  ) {
    this.sampleData = samples.samples;
  }

  navigate(path: string) {
    this.router.navigate([path]);
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
      isUnique: false,
      isNull: false,
      foreignKey: false,
      refTable: '',
      refCol: '',
      relType: '',
    });
  }

  removeTable(index: number) {
    this.tables.splice(index);
  }
}
