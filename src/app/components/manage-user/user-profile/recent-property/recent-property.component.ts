import { Component } from '@angular/core';
import { recentProperty } from '../../../../shared/data/data/manage-user/manage-user';

@Component({
  selector: 'app-recent-property',
  templateUrl: './recent-property.component.html',
  styleUrls: ['./recent-property.component.scss']
})
export class RecentPropertyComponent {

  public recentProperty = recentProperty;

}
