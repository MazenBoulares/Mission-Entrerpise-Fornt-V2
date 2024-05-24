import { Component } from '@angular/core';
import { propertyDetails } from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {

  public propertyData: propertyDetails[];

  constructor(private propertyService: PropertyService){
    this.propertyService.getProperty().subscribe(response => {
      this.propertyData = response;
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-default', '#ff5c41');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-default')
  }
}
