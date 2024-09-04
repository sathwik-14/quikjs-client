import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  expanded: BehaviorSubject<string> = new BehaviorSubject('out');

  toggleSidebar() {
    const state = this.expanded.value == 'in' ? 'out' : 'in';
    this.expanded.next(state);
  }
  constructor() {}
}
