import { Component } from '@angular/core';
import { dashboardProperty } from '../../../shared/data/data/dashboard/dashboard';

@Component({
  selector: 'app-dashboard-my-property',
  templateUrl: './dashboard-my-property.component.html',
  styleUrls: ['./dashboard-my-property.component.scss']
})
export class DashboardMyPropertyComponent {

  public dashboardProperty = dashboardProperty;

}
