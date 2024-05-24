import { Component, Input } from '@angular/core';
import { propertyDetails } from '../../../../shared/interface/interface';

@Component({
  selector: 'app-common-property-box',
  templateUrl: './common-property-box.component.html',
  styleUrls: ['./common-property-box.component.scss']
})
export class CommonPropertyBoxComponent {

  @Input() propertyData: propertyDetails;

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  };

}
