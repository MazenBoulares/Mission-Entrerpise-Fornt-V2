import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CommonLoginFormComponent } from './widgets/common-login-form/common-login-form.component';


@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    ErrorPageComponent,
    CommonLoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
