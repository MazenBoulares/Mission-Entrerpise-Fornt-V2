import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';

import { RevenueChartComponent } from './revenue-chart/revenue-chart.component';
import { PropertySalesComponent } from './property-sales/property-sales.component';
import { IncomeAnalysisComponent } from './income-analysis/income-analysis.component';
import { VisitorLocationComponent } from './visitor-location/visitor-location.component';
import { RecentTranscationComponent } from './recent-transcation/recent-transcation.component';


@NgModule({
  declarations: [
    ReportsComponent,
    RevenueChartComponent,
    PropertySalesComponent,
    IncomeAnalysisComponent,
    VisitorLocationComponent,
    RecentTranscationComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    DashboardModule
  ]
})
export class ReportsModule { }
