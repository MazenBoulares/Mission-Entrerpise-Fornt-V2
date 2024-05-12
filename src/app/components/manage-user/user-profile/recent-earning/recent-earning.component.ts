import { Component } from '@angular/core';
import { earningChart } from '../../../../shared/data/charts/manage-user-chart';

@Component({
  selector: 'app-recent-earning',
  templateUrl: './recent-earning.component.html',
  styleUrls: ['./recent-earning.component.scss']
})
export class RecentEarningComponent {

  public earningChart = earningChart;

}
