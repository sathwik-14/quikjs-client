import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
currentSection = 0;
sections = [
  {
    name:'projects',
    link: '/projects'
  },
  {
    name: 'schemas',
    link: '/schemas'
  },
  {
    name: 'apis',
    link: '/apis'
  }
]
}
