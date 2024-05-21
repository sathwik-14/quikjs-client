'use client';

import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule, CodemirrorModule],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss',
})
export class ExplorerComponent implements OnChanges {
  constructor(public _content: ProjectService) {}

  @Input() node: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.node) {
      this.node = { ...this.node, expand: this.node.name == '/' };
    }
  }

  setContent(node: any) {
    this._content.currentNode.set(node);
  }

  getChildren(node: any): any[] {
    return Object.keys(node.children).map((key) => node.children[key]);
  }
}
