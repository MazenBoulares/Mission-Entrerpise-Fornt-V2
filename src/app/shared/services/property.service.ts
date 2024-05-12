import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { propertyDetails, users } from '../interface/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  // Get Property Details
  public getProperty(): Observable<propertyDetails[]>{
    return this.http.get<propertyDetails[]>('assets/data/property.json')
  }

  // Users Data
  public getUsers(): Observable<users[]>{
    return this.http.get<users[]>('assets/data/users.json')
  }

}
