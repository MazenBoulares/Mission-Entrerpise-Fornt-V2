import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { TotalPropertyComponent } from './total-property/total-property.component';
import { PaymentReceiveLastMonthComponent } from './payment-receive-last-month/payment-receive-last-month.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { SalesStatusComponent } from './sales-summary/sales-status/sales-status.component';
import { ChartLegendsComponent } from './sales-summary/chart-legends/chart-legends.component';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { ProjectTimelineComponent } from './project-timeline/project-timeline.component';
import { AssignessComponent } from './assigness/assigness.component';
import { DashboardMyPropertyComponent } from './dashboard-my-property/dashboard-my-property.component';
import { DashboardManagementReportsComponent } from './dashboard-management-reports/dashboard-management-reports.component';
import { SoldOutChartComponent } from './sold-out-chart/sold-out-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TotalPropertyComponent,
    PaymentReceiveLastMonthComponent,
    SalesSummaryComponent,
    SalesStatusComponent,
    ChartLegendsComponent,
    DashboardWidgetsComponent,
    ProjectTimelineComponent,
    AssignessComponent,
    DashboardMyPropertyComponent,
    DashboardManagementReportsComponent,
    SoldOutChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    SharedModule
  ],
  exports: [
    SalesSummaryComponent,
    DashboardManagementReportsComponent
  ]
})
export class DashboardModule { }
