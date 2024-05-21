// zip.service.ts
import { Injectable } from '@angular/core';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { ProjectService } from './projects/project.service';

@Injectable({
  providedIn: 'root',
})
export class ZipService {
  constructor(private _content: ProjectService) {}

  private addFilesToZip(zip: JSZip, node: any, path: string): void {
    if (node.children) {
      for (const childName in node.children) {
        const childNode = node.children[childName];
        const childPath = path ? `${path}/${childName}` : childName;
        this.addFilesToZip(zip, childNode, childPath);
      }
    } else {
      zip.file(path, node.content);
    }
  }

  downloadAsZip() {
    const zip = new JSZip();
    this.addFilesToZip(zip, this._content.node(), '');
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'fileSystem.zip');
    });
  }
}
