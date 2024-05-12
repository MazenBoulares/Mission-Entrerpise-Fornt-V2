import { Component } from '@angular/core';
import { propertyDetails } from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.scss']
})
export class PropertyTypeComponent {

  public propertyData: propertyDetails[];
  public property_type: string;

  constructor(private propertyService: PropertyService){
    if(window.location.pathname.includes('/type/family-house')){
      this.property_type = "family_house";
    }else if(window.location.pathname.includes('/type/cottage')){
      this.property_type = "cottage";
    }
    else if(window.location.pathname.includes('/type/apartment')){
      this.property_type = "apartment";
    }
    else if(window.location.pathname.includes('/type/condominium')){
      this.property_type = "condominium";
    }

    this.propertyService.getProperty().subscribe(response => {
      this.propertyData = response.filter((data) => {
        return data.propertyType == this.property_type;
      });
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-default', '#ff5c41');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-default')
  }
}
