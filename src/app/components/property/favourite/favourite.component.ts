import { Component } from '@angular/core';
import {propertyDetails, User} from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';
import Swal from "sweetalert2";
import {ToastrService} from "ngx-toastr";
import {ListingService} from "../../../shared/services/listing.service";
import {Listing} from "../../../shared/entity/listing";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {

  public propertyData: propertyDetails[];
  public listing: Listing[];
  constructor(private propertyService: PropertyService,private toastr: ToastrService,
              private  listinService: ListingService){
    // this.listinService.getAllListings().subscribe(response => {
    //   this.listing = response;
    // })
    this.listing = [
      {
        listingId: 1,
        title: "Luxury Villa 1",
        description: "Beautiful luxury villa with stunning views.",
        price: 1000000,
        listingCreationDate: new Date("2024-05-25T00:00:00Z"),
        listingStatus: "Active",
        listingType: "For Sale",
        listingState: "APPROVED",
        property: {
          propertyId: 1,
          propertySurface: 5000,
          propertyBedrooms: 5,
          propertyBathrooms: 6,
          propertyBalcony: 1,
          propertyGarage: 2,
          price: 1000000,
          propertyType: "Villa",
          propertyDescription: "This luxurious villa offers spacious living areas and breathtaking views.",
          yearOfConstruction: new Date("2015-01-01T00:00:00Z"),
          address: {
            addressId: 1,
            addressStreet: "123 Main Street",
            addressCity: "Los Angeles",
            addressZipCode: "90001",
            addressCountry: "USA",
            addressState: "California",
            latitude: 34.052235,
            longitude: -118.243683
          },
          images: [
            {
              imageUrlId: 1,
              imageUrl: "https://example.com/image1.jpg"
            },
            {
              imageUrlId: 2,
              imageUrl: "https://example.com/image2.jpg"
            },
            {
              imageUrlId: 3,
              imageUrl: "https://example.com/image3.jpg"
            }
          ]
        }
      },
      // Add more dummy listings
      {
        listingId: 2,
        title: "Modern Apartment",
        description: "Stylish apartment in the heart of the city.",
        price: 500000,
        listingCreationDate: new Date("2024-05-26T00:00:00Z"),
        listingStatus: "Active",
        listingType: "For Sale",
        listingState: "APPROVED",
        property: {
          propertyId: 2,
          propertySurface: 1200,
          propertyBedrooms: 2,
          propertyBathrooms: 2,
          propertyBalcony: 0,
          propertyGarage: 1,
          price: 500000,
          propertyType: "Apartment",
          propertyDescription: "This modern apartment features contemporary design and convenient amenities.",
          yearOfConstruction: new Date("2018-01-01T00:00:00Z"),
          address: {
            addressId: 2,
            addressStreet: "456 Elm Street",
            addressCity: "New York",
            addressZipCode: "10001",
            addressCountry: "USA",
            addressState: "New York",
            latitude: 40.712776,
            longitude: -74.005974
          },
          images: [
            {
              imageUrlId: 4,
              imageUrl: "https://example.com/image4.jpg"
            },
            {
              imageUrlId: 5,
              imageUrl: "https://example.com/image5.jpg"
            }
          ]
        }
      },
      // Add more dummy listings as needed...
    ];
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
