import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient) { }
  private apiKey = '13c530171238955307dc39dd8b812b50'; // Replace with your imgbb API key



  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);

    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.apiKey}`,
    });

    return this.http.post<any>('https://api.imgbb.com/1/upload', formData, {params:{ key:this.apiKey }});
  }

  uploadImages(files: File[]): Observable<any> {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`image${index + 1}`, file);
    });

    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.apiKey}`
    });

    return this.http.post<any>('https://api.imgbb.com/1/upload', formData, {params:{ key:this.apiKey }});
  }
}
