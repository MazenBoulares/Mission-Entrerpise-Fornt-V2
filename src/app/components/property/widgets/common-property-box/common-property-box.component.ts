import { Component, Input } from '@angular/core';
import { propertyDetails } from '../../../../shared/interface/interface';
import Swal from "sweetalert2";
import {PropertyService} from "../../../../shared/services/property.service";
import {ToastrService} from "ngx-toastr";
import {ListingService} from "../../../../shared/services/listing.service";
import {Listing} from "../../../../shared/entity/listing";

@Component({
  selector: 'app-common-property-box',
  templateUrl: './common-property-box.component.html',
  styleUrls: ['./common-property-box.component.scss']
})
export class CommonPropertyBoxComponent {

 @Input() listing : Listing;

  constructor(private propertyService:PropertyService,private toastr:ToastrService,
              private listingService:ListingService
) {

  }

  // @Input() propertyData: propertyDetails;

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







  changePropertyLabel(propertyId: number) {
    console.log(propertyId);

    // Define the dropdown options
    const dropdownOptions = `
  <div style="margin-top: 10px; text-align: left;">
    <label for="propertyStatus" style="display: block; margin-bottom: 5px;">Select Property Status:</label>
    <select id="propertyStatus" class="swal2-select" style="width: 100%; padding: 5px;">
      <option value="APPROVED">Approved</option>
      <option value="PENDING">Pending</option>
      <option value="REJECTED">Rejected</option>
    </select>
  </div>
`;

    Swal.fire({
      title: 'Change Property Label',
      html: `Are you sure you want to change the label of this property? ${dropdownOptions}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Change it!',
      preConfirm: () => {
        // Get the selected status from the dropdown
        const propertyStatus = (document.getElementById('propertyStatus') as HTMLSelectElement).value;
        return propertyStatus;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the change status API endpoint with the selected status
        const selectedStatus = result.value;
        this.listingService.changePropertyStatus(propertyId, selectedStatus).subscribe(
            () => {
              // Emit event to notify parent component about status change
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


  isImageType(url: string): boolean {
    return url.toLowerCase().endsWith('.jpg') || url.toLowerCase().endsWith('.jpeg') || url.toLowerCase().endsWith('.png') || url.toLowerCase().endsWith('.gif');
  }
}
