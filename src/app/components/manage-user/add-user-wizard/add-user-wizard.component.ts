import { Component } from '@angular/core';
import { stepsData } from '../../../shared/data/data/manage-user/manage-user';
import { User } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-add-user-wizard',
  templateUrl: './add-user-wizard.component.html',
  styleUrls: ['./add-user-wizard.component.scss']
})
export class AddUserWizardComponent {

  public stepsData = stepsData;
  public activeSteps: number;
  // public user: User;

  public user: User = {
    // userId: null,
    username: 'seeker_username',
    password: '',
    token: null,
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: new Date('18/10/2023'),
    registrationDate: new Date(),
    department: '',
    role: '',
    superAdmin: false,
    accessLevel: 0,
    desiredLocation: '',
    minBudget: 1000,  // Add the appropriate budget here
    maxBudget: 2000,
    preferredPropertyType: '',
    notificationEnabled: true
  };

 

  ngOnInit() {
    const data = stepsData.filter((data) => {
      return data.stepNumber === 1;
    });
    this.activeSteps = data[0].stepNumber;
    console.log("data:"+ data)
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }

  handleActiveSteps(event: { step: number, user: User }) {


console.log("it is called");

console.log( event.user);

    this.activeSteps = event.step;
    this.user = event.user;
  }

  // updateUser(user: User) {
  //   this.user = user;
  // }
}
