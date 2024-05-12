import { Component } from '@angular/core';
import { stepsData } from '../../../shared/data/data/manage-user/manage-user';

@Component({
  selector: 'app-add-user-wizard',
  templateUrl: './add-user-wizard.component.html',
  styleUrls: ['./add-user-wizard.component.scss']
})
export class AddUserWizardComponent {

  public stepsData = stepsData;
  public activeSteps: number;

  ngOnInit() {
    const data = stepsData.filter((data) => {
      return data.stepNumber === 1;
    });
    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
