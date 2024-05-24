import { Component } from '@angular/core';
import { propertyDetails } from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';
import {ListingService} from "../../../shared/services/listing.service";
import {Listing} from "../../../shared/entity/listing";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {

  public propertyData: propertyDetails[];
  public listing: Listing[];
  constructor(private propertyService: PropertyService,private listingService:ListingService)
  {
    // this.listingService.getAllListings().subscribe(response => {
    // return this.listing = response;
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

}
