import { Component } from '@angular/core';
import { messageData } from '../../../../../shared/data/data/header/headet';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  public messageData = messageData;

}
