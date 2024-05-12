import { Component, Input } from '@angular/core';
import { users } from '../../../../shared/interface/interface';

@Component({
  selector: 'app-common-user-details',
  templateUrl: './common-user-details.component.html',
  styleUrls: ['./common-user-details.component.scss']
})
export class CommonUserDetailsComponent {

  @Input() userDetails: users;
  @Input() property: boolean;
  @Input() type: string;

  public isMobile: boolean = false;
  public mobileNumber: string;

  ngOnInit(){
    this.mobileNumber = this.userDetails.mobile.replace(this.userDetails.mobile.slice(-4), '****' );
  }

  showMobile(data: users){
    this.isMobile =! this.isMobile;
    if(this.isMobile){
      this.mobileNumber = data.mobile
    }else{
      this.mobileNumber = data.mobile.replace(data.mobile.slice(-4),"****");
    }
  }
}
