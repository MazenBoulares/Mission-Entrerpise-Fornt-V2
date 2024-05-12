import { Component } from '@angular/core';
import { invoiceData } from '../../../shared/data/data/agent/agent';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  public invoiceData = invoiceData;

}
