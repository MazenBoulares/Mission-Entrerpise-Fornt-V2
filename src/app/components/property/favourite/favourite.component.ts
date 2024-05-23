import { Component } from '@angular/core';
import {propertyDetails, User} from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';
import Swal from "sweetalert2";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {

  public propertyData: propertyDetails[];

  constructor(private propertyService: PropertyService,private toastr: ToastrService){
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

  changePropertyLabel(propertyId: number){
    // Show confirmation dialog before deleting the user
    Swal.fire({
      title: 'Change Property Label',
      text: 'Are you sure you want to change the label of this property?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Change it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the delete API endpoint
        this.propertyService.changePropertyStatus(propertyId).subscribe(
            () => {
              // Emit event to notify parent component about user deletion
              // Show success message
              this.toastr.success('Status changed successfully.', '', { timeOut: 3000 });
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            },
            (error) => {
              console.error('Error changing status:', error);
              // Show error message
              this.toastr.error('Failed to change status.', '', { timeOut: 3000 });
            }
        );
      }
    });

  }


}
