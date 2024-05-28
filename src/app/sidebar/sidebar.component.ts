import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(public _route: Router) {}
  currentSection = 0;
  sections = [
    {
      name: 'projects',
      link: 'dashboard/projects',
    },
    {
      name: 'schemas',
      link: '/dashboard/schemas',
    },
    {
      name: 'apis',
      link: 'dashboard/apis',
    },
  ];
}
