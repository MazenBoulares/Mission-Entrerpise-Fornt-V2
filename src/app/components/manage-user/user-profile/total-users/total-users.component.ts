import { Component, Input } from '@angular/core';
import { totalUserChart } from '../../../../shared/data/charts/manage-user-chart';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.scss']
})
export class TotalUsersComponent {

  @Input() title: string;
  @Input() chartData: any;

  public totalUserChart = totalUserChart;

}
