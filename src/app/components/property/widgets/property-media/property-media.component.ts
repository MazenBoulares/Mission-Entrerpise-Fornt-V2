import { Component } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-property-media',
  templateUrl: './property-media.component.html',
  styleUrls: ['./property-media.component.scss']
})
export class PropertyMediaComponent {

  public files: File[] = [];

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
		this.files.splice(this.files.indexOf(event), 1);
	}
}
