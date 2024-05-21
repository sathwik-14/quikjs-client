import { Component, effect } from '@angular/core';

import { CodemirrorComponent, CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ExplorerComponent } from './explorer/explorer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../project.service';
import { ZipService } from '../../zip.service';

@Component({
  selector: 'app-view-project',
  standalone: true,
  imports: [CommonModule, ExplorerComponent, CodemirrorModule, FormsModule],
  templateUrl: './view-project.component.html',
  styleUrl: './view-project.component.scss',
})

export class ViewProjectComponent {
    content!:any;
    constructor(public _content:ProjectService,private _zip:ZipService) {
        effect(()=>{
            this.content = _content.currentNode()
        })
    }

    onContentChange(editor:CodemirrorComponent){
        console.log(editor.codeMirror?.getDoc());
        this._content.currentNode.update(()=>this.content)
    }

    download() {
        this._zip.downloadAsZip()
    }
}
