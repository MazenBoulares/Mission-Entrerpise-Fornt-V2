import { Component } from '@angular/core';
import { friends } from '../../../../shared/data/data/manage-user/manage-user';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {

  public friends = friends;

}
