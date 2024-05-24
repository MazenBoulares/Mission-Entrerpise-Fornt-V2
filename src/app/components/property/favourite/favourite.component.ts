import { Component } from '@angular/core';
import { propertyDetails } from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {

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
