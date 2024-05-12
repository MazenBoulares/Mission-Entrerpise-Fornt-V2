import { Component } from '@angular/core';
import { totalProperty } from '../../../shared/data/data/dashboard/dashboard';

@Component({
  selector: 'app-total-property',
  templateUrl: './total-property.component.html',
  styleUrls: ['./total-property.component.scss']
})
export class TotalPropertyComponent {

  public totalProperty = totalProperty;

}
