import { Component } from '@angular/core';
import { notificationData } from '../../../../../shared/data/data/header/headet';
import {WebsocketService} from "../../../../services/websocket.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

    notificationData: any[] = [];

  private subscription: Subscription;

    constructor(private websocketService: WebsocketService) {
        this.subscription = this.websocketService
            .connect('ws://localhost:8082/notifications')
            .subscribe((message) => {
                const data = {
                    title: 'Listing status changed',
                    time: new Date().toLocaleString(),
                    subTitle: message.data,
                };
                this.notificationData.push(data);
                console.log(data);
            });
    }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
