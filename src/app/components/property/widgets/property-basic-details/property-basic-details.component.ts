import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { agencyData, propertyDetails, propertyStatus } from '../../../../shared/data/data/property/property';

@Component({
  selector: 'app-property-basic-details',
  templateUrl: './property-basic-details.component.html',
  styleUrls: ['./property-basic-details.component.scss']
})
export class PropertyBasicDetailsComponent {

  public propertyStatus = propertyStatus;
  public propertyDetails = propertyDetails;
  public agencyData = agencyData;
  public value = 'For Sale';
  public roomValue = 1;
  public bedValue = 1;
  public bathValue = 1;
  public agencyValue = 'Premiere';
  public description = '';
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
      this.value = 'For Rent',
      this.roomValue = 3;
      this.bedValue = 2;
      this.bathValue = 1;
      this.agencyValue = 'Premiere';
      this.description = 'Air conditioning unit, new furnace, all appliances included. Basement walks out to fenced backyard. Huge deck in back. Lots of updates.'
    }
  }
}
