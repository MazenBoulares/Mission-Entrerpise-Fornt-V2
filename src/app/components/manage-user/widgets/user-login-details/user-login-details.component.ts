import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface/interface';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-login-details',
  templateUrl: './user-login-details.component.html',
  styleUrls: ['./user-login-details.component.scss']
})
export class UserLoginDetailsComponent {

  @Input() user: User; // Declare user as an input property

  @Input() email: boolean = false;
  @Input() type: string;
  @Input() button: boolean = false;

  // @Output() activeSteps = new EventEmitter<number>();
  @Output() activeSteps = new EventEmitter<{ step: number, user: User }>();

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

    // this.myForm = new FormGroup({
    //   email_address: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl(this.Password, Validators.required),
    //   confirm_password: new FormControl(this.confirmPassword, Validators.required),
    //   description: new FormControl('', Validators.required),
    //   address: new FormControl(this.Address, Validators.required),
    //   zip_code: new FormControl(this.zipCode, [
    //     Validators.required,
    //     Validators.pattern('^((\\+91-?)|0)?[0-9]{6}$'),
    //     Validators.minLength(6),
    //     Validators.maxLength(6)
    //   ]),
    // });

    this.myForm = new FormGroup({
      email_address: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(this.Password, [Validators.required, Validators.minLength(8)]), // Adding a minimum length validation
      confirm_password: new FormControl(this.confirmPassword, Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl(this.Address, Validators.required),
      zip_code: new FormControl(this.zipCode, [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{6}$'),
          Validators.minLength(6),
          Validators.maxLength(6)
      ]),
    }, { validators: this.passwordMatchValidator }); // Using the passwordMatchValidator as a custom validator
    

  }


  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirm_password = control.get('confirm_password');
    if (password && confirm_password && confirm_password.value !== null && password.value !== confirm_password.value) {
      confirm_password.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else if (confirm_password) {
      confirm_password.setErrors(null); // Clearing errors when passwords match
      return null;
    }
    return null;
  }
  

  
  ngOnInit() {
    console.log("user ", this.user)
   
  }

  previous() {
    const number = this.activeStep - 1;
    // this.activeSteps.emit(number);

    this.activeSteps.emit({ step: number, user: this.user });
  }

  // next() {
  //   this.validate = true;
  //   if (this.myForm.valid) {
  //     const number = this.activeStep + 1;
  //     // this.activeSteps.emit(number);

  //     // this.activeSteps.emit({ step: number, user: this.user });
  //   }
  // }

  next() {
    this.validate = true;
    if (this.myForm.valid) {
        // Update the user object with form values
        this.user.email = this.myForm.get('email_address')?.value || '';
        this.user.password = this.myForm.get('password')?.value || '';
        // this.user.description = this.myForm.get('description')?.value || '';
        this.user.address = this.myForm.get('address')?.value || '';
        // this.user.zipCode = this.myForm.get('zip_code')?.value || '';

        const number = this.activeStep + 1;
        // Emit the updated user object along with the step number
        this.activeSteps.emit({ step: number, user: this.user });
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
