import { Component, Input } from '@angular/core';
import { User, users } from '../../../../shared/interface/interface';

@Component({
  selector: 'app-common-user-details',
  templateUrl: './common-user-details.component.html',
  styleUrls: ['./common-user-details.component.scss']
})
export class CommonUserDetailsComponent {

  @Input() userDetails: User;
  @Input() property: boolean;
  @Input() type: string;

  public isMobile: boolean = false;
  public mobileNumber: string;

  ngOnInit(){
    this.mobileNumber = this.userDetails.phoneNumber.replace(this.userDetails.phoneNumber.slice(-4), '****' );
    console.log(this.mobileNumber)
  }

  showMobile(data: User){
    this.isMobile =! this.isMobile;
    if(this.isMobile){
      this.mobileNumber = data.phoneNumber
    }else{
      this.mobileNumber = data.phoneNumber.replace(data.phoneNumber.slice(-4),"****");
    }
  }
}
