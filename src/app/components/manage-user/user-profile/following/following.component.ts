import { Component, Input } from '@angular/core';
import { followingData } from '../../../../shared/data/data/manage-user/manage-user';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent {

  @Input() totalData: number;

  public followingData = followingData;

}
