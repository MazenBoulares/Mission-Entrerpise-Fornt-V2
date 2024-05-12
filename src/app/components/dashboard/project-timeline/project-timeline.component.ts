import { Component } from '@angular/core';
import { timelineChart } from '../../../shared/data/charts/dashboard-chart';

@Component({
  selector: 'app-project-timeline',
  templateUrl: './project-timeline.component.html',
  styleUrls: ['./project-timeline.component.scss']
})
export class ProjectTimelineComponent {

  public timelineChart = timelineChart;

}
