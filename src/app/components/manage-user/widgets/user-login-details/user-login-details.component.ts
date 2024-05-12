import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-details',
  templateUrl: './user-login-details.component.html',
  styleUrls: ['./user-login-details.component.scss']
})
export class UserLoginDetailsComponent {

  @Input() email: boolean = false;
  @Input() type: string;
  @Input() button: boolean = false;

  @Output() activeSteps = new EventEmitter<number>();

  public genderValue = 'Male';
  public activeStep: number = 2;
  public validate: boolean = false;
  public myForm: FormGroup;

  public emailAddress: string = '';
  public Password: string = '';
  public confirmPassword!: string;
  public desc: string = '';
  public Address: string = '';
  public zipCode: number;
  public currentPageURL: string = '';
  public formOption: string = '';
  public dob: string = '';

  constructor(private router: Router){
    this.currentPageURL = this.router.url;
    if(window.location.pathname == '/manage-user/add-user'  || window.location.pathname == '/agents/add-agent' ){
      this.formOption = 'Add'
    }else if(window.location.pathname == '/manage-user/edit-user'  || window.location.pathname == '/agents/edit-agent' ){
      this.formOption = 'Edit'
    }

    if(this.formOption == 'Edit'){
      this.desc = 'Paige';
      this.Password = '120124';
      this.confirmPassword = '120124'
      this.Address = 'Mina Road, Dubai, United Arab Emirates';
      this.zipCode = 39702;
    }

    this.myForm = new FormGroup({
      email_address: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(this.Password, Validators.required),
      confirm_password: new FormControl(this.confirmPassword, Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl(this.Address, Validators.required),
      zip_code: new FormControl(this.zipCode, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{6}$'),
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
    });
  }


  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  next() {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get email_address() {
    return this.myForm.get('email_address');
  }

  get password() {
    return this.myForm.get('password');
  }

  get confirm_password() {
    return this.myForm.get('confirm_password');
  }

  get description() {
    return this.myForm.get('description');
  }

  get address() {
    return this.myForm.get('address');
  }

  get zip_code() {
    return this.myForm.get('zip_code');
  }
}
