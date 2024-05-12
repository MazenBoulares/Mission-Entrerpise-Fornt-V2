import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {

  public worldMapOption: google.maps.MapOptions = {
    center: { lat: 0, lng: 0 },
    zoom: 2
  };

  public usaMapOptions: google.maps.MapOptions = {
    center: { lat: 37.0902, lng: -95.7129 },
    zoom: 4
  };

  public asiaMapOptions: google.maps.MapOptions = {
    center: { lat: 47.5162, lng: 100.2167 },
    zoom: 3
  };

  public indiaMapOptions: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 4
  };

}
