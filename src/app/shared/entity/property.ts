// property.interface.ts

import {Address} from "./address";
import {ImageUrl} from "./imageUrl";

export interface Property {
    propertyId: number;
    propertySurface: number;
    propertyBedrooms: number;
    propertyBathrooms: number;
    propertyBalcony: number;
    propertyGarage: number;
    price: number;
    propertyType: string;
    propertyDescription: string;
    yearOfConstruction: Date;
    address: Address;
    images: ImageUrl[];
}
