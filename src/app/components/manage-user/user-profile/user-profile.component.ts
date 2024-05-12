import { Component } from '@angular/core';
import { totalUserChart } from '../../../shared/data/charts/manage-user-chart';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  public userChart = totalUserChart;

}
