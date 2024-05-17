import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/shared/services/property.service';
import { User } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: ['./user-personal-details.component.scss']
})
export class UserPersonalDetailsComponent {

  @Input() email: boolean = true;
  @Input() type: string;
  @Input() button: boolean = false;

  @Output() activeSteps = new EventEmitter<{ step: number, user: User }>();

  @Output() userChange = new EventEmitter<User>();



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

 










  constructor(private router: Router, private propertyService: PropertyService){
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



    // Initialize form with default values
    this.myForm = new FormGroup({
      first_name: new FormControl(this.user.firstName, Validators.required),
      last_name: new FormControl(this.user.lastName, Validators.required),
      phone: new FormControl(this.user.phoneNumber, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      // gender: new FormControl('', Validators.required),
      date: new FormControl(this.user.dateOfBirth, Validators.required),
    });



  }


  // next() {
  //   this.validate = true;
  //   if (this.myForm.valid) {
  //     const number = this.activeStep + 1;
  //     this.activeSteps.emit(number);
  //   }



next() {

console.log("insideeeeeeeeeeeeee");


    this.validate = true;
    if (this.myForm.valid) {

      this.user.firstName = this.myForm.get('first_name')?.value || '';
      this.user.lastName = this.myForm.get('last_name')?.value || '';
      this.user.phoneNumber = this.myForm.get('phone')?.value || '';
      this.user.dateOfBirth = this.myForm.get('date')?.value || null;


      // const user = {
      //   userId: null,
      //   username: 'seeker_username',  // Add the appropriate username here
      //   password: 'seeker_password',  // Add the appropriate password here
      //   token: null,
      //   email: this.emailAddress,
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   phoneNumber: this.phoneNumber.toString(),
      //   address: 'Seeker Address',  // Add the appropriate address here
      //   // dateOfBirth: this.bi,
      //   dateOfBirth: "12345678",
      //   registrationDate: new Date().toISOString().split('T')[0],
      //   desiredLocation: 'Desired Location',  // Add the appropriate location here
      //   minBudget: 1000,  // Add the appropriate budget here
      //   maxBudget: 2000,  // Add the appropriate budget here
      //   preferredPropertyType: 'Apartment',  // Add the appropriate property type here
      //   notificationEnabled: true
      // };

      // this.propertyService.submitPropertySeeker(this.user).subscribe(
      //   response => {
      //     console.log('User submitted successfully', response);
      //     this.activeSteps.emit(this.activeStep + 1);

      //     // Emitting the user data to the parent component
    
      //   },
      //   error => {
      //     console.error('Error submitting user', error);
      //   }


 // );

 const number = this.activeStep + 1;
 this.activeSteps.emit({ step: number, user: this.user });
 this.userChange.emit(this.user);


     



    
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

  // get gender() {
  //   return this.myForm.get('gender');
  // }

  get date() {
    return this.myForm.get('date');
  }










  }


