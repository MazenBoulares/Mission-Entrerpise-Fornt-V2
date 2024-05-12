import { Component } from '@angular/core';
import { attachmentData } from '../../../../../shared/data/data/header/headet';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent {

  public attachmentData = attachmentData;

}
