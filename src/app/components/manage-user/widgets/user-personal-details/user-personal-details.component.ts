import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: ['./user-personal-details.component.scss']
})
export class UserPersonalDetailsComponent {

  @Input() email: boolean = true;
  @Input() type: string;
  @Input() button: boolean = false;

  @Output() activeSteps = new EventEmitter<number>();

  public genderValue = 'Male';
  public activeStep: number = 1;
  public validate: boolean = false;
  public myForm: FormGroup;

  public firstName: string = '';
  public lastName: string = '';
  public phoneNumber: number;
  public emailAddress: string = '';
  public currentPageURL: string = '';
  public formOption: string = '';
  public dob: string = '';

  constructor(private router: Router){
    this.currentPageURL = this.router.url;
    if(window.location.pathname == '/manage-user/add-user' || window.location.pathname == '/agents/add-agent'){
      this.formOption = 'Add'
    }else if(window.location.pathname == '/manage-user/edit-user' || window.location.pathname == '/agents/edit-agent'){
      this.formOption = 'Edit'
    }

    if(this.formOption == 'Edit'){
      this.firstName = 'Paige';
      this.lastName = 'Turner';
      this.genderValue = 'feMale'
      this.phoneNumber = 7596140312;
      this.emailAddress = 'turner@gmail.in';
      this.dob = '18/10/2023'
    }

    this.myForm = new FormGroup({
      first_name: new FormControl( this.firstName, Validators.required),
      last_name: new FormControl( this.lastName, Validators.required),
      phone: new FormControl( this.phoneNumber, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      gender: new FormControl( '', Validators.required),
      date: new FormControl( this.dob, Validators.required),
    });
  }


  next() {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get first_name() {
    return this.myForm.get('first_name');
  }

  get last_name() {
    return this.myForm.get('last_name');
  }

  get phone() {
    return this.myForm.get('phone');
  }

  get gender() {
    return this.myForm.get('gender');
  }

  get date() {
    return this.myForm.get('date');
  }
}
