import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-login-form',
  templateUrl: './common-login-form.component.html',
  styleUrls: ['./common-login-form.component.scss']
})
export class CommonLoginFormComponent {

  @Input() type: string;
  public isShow: boolean = false;
  public inputType: string = 'password';

  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
