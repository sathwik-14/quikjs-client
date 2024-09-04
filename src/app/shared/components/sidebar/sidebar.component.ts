import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(-100%,0,0)',
        width: '0px',
        opacity: '0'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidebarComponent {
  constructor(public _route: Router, public _sidebar: SidebarService) {}
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
