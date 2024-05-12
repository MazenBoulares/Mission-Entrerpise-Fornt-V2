import { Component } from '@angular/core';
import { lastMonthData } from '../../../shared/data/data/dashboard/dashboard';

@Component({
  selector: 'app-payment-receive-last-month',
  templateUrl: './payment-receive-last-month.component.html',
  styleUrls: ['./payment-receive-last-month.component.scss']
})
export class PaymentReceiveLastMonthComponent {

  public lastMonthData =lastMonthData;

}
