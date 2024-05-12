import { Component } from '@angular/core';
import { totalAgentChart } from '../../../shared/data/charts/agents-chart';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent {

  public agentChart = totalAgentChart;

}
