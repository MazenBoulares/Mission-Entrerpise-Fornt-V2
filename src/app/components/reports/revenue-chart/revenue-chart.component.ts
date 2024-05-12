import { Component } from '@angular/core';
import { revenueChart } from '../../../shared/data/charts/reports-chart';

@Component({
  selector: 'app-revenue-chart',
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.scss']
})
export class RevenueChartComponent {

  public revenueChartData = revenueChart;

}
