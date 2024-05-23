import { Component, Input } from '@angular/core';
import { propertyDetails } from '../../../../shared/interface/interface';
import Swal from "sweetalert2";
import {PropertyService} from "../../../../shared/services/property.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-common-property-box',
  templateUrl: './common-property-box.component.html',
  styleUrls: ['./common-property-box.component.scss']
})
export class CommonPropertyBoxComponent {

  constructor(private propertyService:PropertyService,private toastr:ToastrService) { }

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

  changePropertyLabel(propertyId: number){
    console.log(propertyId);
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
              this.toastr.error('Failed to change status.', '', { timeOut: 3000 });
            }
        );
      }
    });

  }


}
