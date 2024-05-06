import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Project {
  name: string;
  description: string;
  orm: string;
  database: string;
  logging: string;
  authentication?: string;
  tools?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  project:any = new BehaviorSubject({})
  constructor() { }
}
