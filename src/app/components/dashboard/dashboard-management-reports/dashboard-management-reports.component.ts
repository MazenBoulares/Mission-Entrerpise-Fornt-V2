import { Component, Input } from '@angular/core';
import { reports } from '../../../shared/interface/interface';

@Component({
  selector: 'app-dashboard-management-reports',
  templateUrl: './dashboard-management-reports.component.html',
  styleUrls: ['./dashboard-management-reports.component.scss']
})
export class DashboardManagementReportsComponent {

  @Input() reportsData: reports[];

}
