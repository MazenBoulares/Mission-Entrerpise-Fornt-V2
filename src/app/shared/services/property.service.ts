import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { propertyDetails, users,User } from '../interface/interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  // Get Property Details
  public getProperty(): Observable<propertyDetails[]>{
    return this.http.get<propertyDetails[]>('assets/data/property.json')
  }

  // // Users Data
  public getUsers(): Observable<users[]>{
    return this.http.get<users[]>('assets/data/users.json')
  }


  public getUsers2(): Observable<User[]> {
    return this.http.get<User[][]>('http://localhost:8082/users').pipe(
      map((data: User[][]) => {
        if (data.length > 0) {
          return data[0]; // Return the array of user objects
        } else {
          return []; // Return an empty array if data is empty or undefined
        }
      })
    );
  }


  public submitPropertySeeker(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8082/users/propertyseeker`, user);
  }

  public submitLandlord(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8082/users/landlord`, user);
  }

  public submitAdmin(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8082/users/admin`, user);
  }



  public deleteUser(userId: number|undefined): Observable<void> {
    return this.http.delete<void>(`http://localhost:8082/users/${userId}`);
  }

}
