import { Component } from '@angular/core';
import { salesSummaryChart } from '../../../shared/data/charts/dashboard-chart';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.scss']
})
export class SalesSummaryComponent {

  public salesSummaryChart = salesSummaryChart;
}
