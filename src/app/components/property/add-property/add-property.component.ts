import { Component } from '@angular/core';
import { AdditionalFeatures } from '../../../shared/data/data/property/property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {

  public AdditionalFeatures = AdditionalFeatures;

}
