import { Component } from '@angular/core';
import { managementReportsData, widgetsData } from '../../shared/data/data/dashboard/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public widgetsData = widgetsData;
  public managementReportsData = managementReportsData;

}
