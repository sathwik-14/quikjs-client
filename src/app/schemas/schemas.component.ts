import { Component } from '@angular/core';

@Component({
  selector: 'app-schemas',
  standalone: true,
  imports: [],
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

  addUser() {
    const newNode:any = {
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
