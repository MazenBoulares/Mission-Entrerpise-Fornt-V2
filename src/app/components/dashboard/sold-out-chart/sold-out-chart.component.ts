import { Component } from '@angular/core';
import { soldOutChart } from '../../../shared/data/charts/dashboard-chart';

@Component({
  selector: 'app-sold-out-chart',
  templateUrl: './sold-out-chart.component.html',
  styleUrls: ['./sold-out-chart.component.scss']
})
export class SoldOutChartComponent {

  public soldOutChart = soldOutChart;

}
