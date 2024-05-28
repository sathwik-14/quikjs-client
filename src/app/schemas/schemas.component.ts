import { Component, signal, Signal } from '@angular/core';
import { GraphComponent, NgxGraphModule, Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-schemas',
  standalone: true,
  imports: [NgxGraphModule],
  templateUrl: './schemas.component.html',
  styleUrl: './schemas.component.scss',
})
export class SchemasComponent {
  nodes: any= [{
    id:'A',
    label:'B'
  },
  {
    id:'B',
    label:'C'
  }
];
  links: any = [];

  table = {
    name:'user',
    attributes: [
      {
        name: 'name',
        type: 'string'
      }
    ]
  }

  zoomOut(canvas:GraphComponent) {
    if (canvas.zoomLevel <= 0) return
    console.log(canvas.zoomLevel);
    canvas.zoom(0.1)
    console.log(canvas.zoomLevel);
  }

  zoomIn(canvas:GraphComponent) {
    if (canvas.zoomLevel >= 4) return
    console.log(canvas.zoomLevel);
    canvas.zoom(0.03)
    console.log(canvas.zoomLevel);
  }

  addUser() {
    const newNode:Node = {
      id: 'random',
      label: this.table.name,
      
    }
    this.addNode(newNode)
  }

  addNode(node:Node) {
    console.log('pushing');
    console.log(this.nodes);
    
    this.nodes.push(node)
    console.log(this.nodes);
    this.nodes = [...this.nodes]
  }

  changeDetection() {
    console.log('state changed');
  }
}
