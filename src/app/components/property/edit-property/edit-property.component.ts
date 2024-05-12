import { Component } from '@angular/core';
import { AdditionalFeatures } from '../../../shared/data/data/property/property';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent {

  public AdditionalFeatures = AdditionalFeatures;

}
