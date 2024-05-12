import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cityData, countryData } from '../../../../shared/data/data/property/property';

@Component({
  selector: 'app-property-address-details',
  templateUrl: './property-address-details.component.html',
  styleUrls: ['./property-address-details.component.scss']
})
export class PropertyAddressDetailsComponent {

  public countryData = countryData;
  public cityData = cityData;
  public countryValue = 'Austria';
  public cityValue = 'Junagadh';
  public address: string = '';
  public landMark: string = '';
  public zipCode: number;
  public currentPageURL: string = '';
  public formOption: string = '';

  constructor(private router: Router){
    this.currentPageURL = this.router.url;
    if(this.currentPageURL == '/property/add-property'){
      this.formOption = 'Add'
    }else if(this.currentPageURL == '/property/edit-property'){
      this.formOption = 'Edit'
    }

    if(this.formOption == 'Edit'){
      this.address = 'Mina Road, Bur Dubai, Dubai, United Arab Emirates';
      this.countryValue = 'Austria';
      this.cityValue = 'Gandhinagar'
      this.landMark = 'Bur Dubai, Dubai';
      this.zipCode = 39702;
    }
  }
}
