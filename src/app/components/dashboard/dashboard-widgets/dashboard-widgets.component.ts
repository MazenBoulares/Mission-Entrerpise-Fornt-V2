import { Component, Input } from '@angular/core';
import { dashboardWidgets } from '../../../shared/interface/interface';

@Component({
  selector: 'app-dashboard-widgets',
  templateUrl: './dashboard-widgets.component.html',
  styleUrls: ['./dashboard-widgets.component.scss']
})
export class DashboardWidgetsComponent {

  @Input() data: dashboardWidgets;

}
