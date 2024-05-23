import { Component } from '@angular/core';
import { propertyDetails } from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';
import {ListingService} from "../../../shared/services/listing.service";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {

  public propertyData: propertyDetails[];

  constructor(private propertyService: PropertyService,private listingService:ListingService){
    this.listingService.getAllListings().subscribe(response => {
        return this.propertyData.push(...response.map((item: any) => this.mapToListing(item)));
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-default', '#ff5c41');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-default')
  }

  private mapToListing(item: any): propertyDetails {
    // Perform mapping of backend data to front-end model latestForRent
    // Example:
    return {
      id: item.listingId,
      type: item.listingType,
      img: item.property.propertyImagesUrl.map((image: { imageUrl: any; }) => ({ url: image.imageUrl })),
      thumbnail: item.property.propertyImagesUrl[0].imageUrl, // Assuming first image is thumbnail
      propertyStatus: item.listingStatus,
      country: item.property.address.addressCountry,
      title: item.listingTitle,
      price: item.price,
      details: item.listingDescription,
      home: item.property.propertyType, // You need to specify where this data comes from
      bed: item.property.propertyBedrooms.toString(),
      bath: item.property.propertyBathrooms.toString(),
      sqft: item.property.propertySurface,
      rooms: item.property.propertyBedrooms,
      date: item.listingCreationDate ? item.listingCreationDate.join('/') : '', // Assuming date is an array [year, month, day]
      propertyType: item.property.propertyType,
      agencies: '', // You need to specify where this data comes from
      labels:item.listingType === 'SALE'? ['sale']:item.listingType==='RENT'?['rent']:['roommate'], // You need to specify where this data comes from
      sale: item.listingType === 'SALE',
      // rent: item.listingType === 'RENT',
      // roommate: item.listingType === 'ROOMMATE',
      fees: false, // You need to specify where this data comes from
      openHouse: false, // You need to specify where this data comes from
      sold: item.listingStatus === 'SOLD',
    };
  }
}
