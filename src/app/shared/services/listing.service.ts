import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environment/environment";
import {ListingDto} from "../entity/listing-dto";
import {Listing} from "../entity/listing";

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private baseUrl = environment.api;

  constructor(private http: HttpClient) { }

  getAllListingsWithProperties(): Observable<ListingDto[]> {
    return this.http.get<ListingDto[]>(`${this.baseUrl}/all`);
  }

  addListing(listingDto: ListingDto, propertyId: number): Observable<ListingDto> {
    return this.http.post<ListingDto>(`${this.baseUrl}/add/${propertyId}`, listingDto);
  }

  updateListing(listing: Listing): Observable<Listing> {
    return this.http.put<Listing>(`${this.baseUrl}/update`, listing);
  }

  deleteListing(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getListing(id: number): Observable<Listing> {
    return this.http.get<Listing>(`${this.baseUrl}/get/${id}`);
  }

  getAllListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.baseUrl}/getAll`);
  }

  changePropertyStatus(propertyId: number,listingStatus:string): Observable<void> {
    return this.http.put<void>(`http://localhost:8082/listing/changeStatus/${propertyId}/${listingStatus}`, null);
  }
}
