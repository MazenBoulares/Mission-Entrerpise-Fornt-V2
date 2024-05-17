import { Component } from '@angular/core';
import { users, User} from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent {

  // public userData: users[];


  public userData: User[];

  constructor(private propertyService: PropertyService){
    this.fetchUserData();

  
  }

  fetchUserData(): void {
    this.propertyService.getUsers2().subscribe(
      (data: User[]) => {
        this.userData = data;
        // console.log(data);
        // Logging user IDs
        this.userData.forEach(user => {
          console.log('User ID:', user.userId);
        });
      },
      (error) => {
        console.error('Error fetching user data: ', error);
      }
    );
  }

  // trackByUserId(index: number, item: User): number {
  //   return item.userId; // Assuming userId is a unique identifier for each user
  // }


}
