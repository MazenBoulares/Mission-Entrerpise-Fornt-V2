import {Property} from "./property";

export interface Listing {
    listingId: number;
    title: string;
    description: string;
    price: number;
    listingCreationDate: Date;
    listingStatus: string;
    listingType: string;
    listingState: string;
    property: Property;
}
