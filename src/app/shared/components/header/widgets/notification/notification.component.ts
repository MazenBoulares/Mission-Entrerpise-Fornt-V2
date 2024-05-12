import { Component } from '@angular/core';
import { notificationData } from '../../../../../shared/data/data/header/headet';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  public notificationData = notificationData;

}
