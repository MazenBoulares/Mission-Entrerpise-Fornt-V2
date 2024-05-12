import { Component } from '@angular/core';
import { stepsData } from '../../../shared/data/data/manage-user/manage-user';

@Component({
  selector: 'app-add-agent-wizard',
  templateUrl: './add-agent-wizard.component.html',
  styleUrls: ['./add-agent-wizard.component.scss']
})
export class AddAgentWizardComponent {

  public stepsData = stepsData;
  public activeSteps: number;

  ngOnInit() {
    const data = stepsData.filter((data) => {
      return data.stepNumber === 1 ;
    });
    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
