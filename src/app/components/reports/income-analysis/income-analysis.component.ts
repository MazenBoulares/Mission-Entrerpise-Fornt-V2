import { Component } from '@angular/core';
import { incomeAnalysisChart } from '../../../shared/data/charts/reports-chart';

@Component({
  selector: 'app-income-analysis',
  templateUrl: './income-analysis.component.html',
  styleUrls: ['./income-analysis.component.scss']
})
export class IncomeAnalysisComponent {

  public incomeAnalysis = incomeAnalysisChart;

}
