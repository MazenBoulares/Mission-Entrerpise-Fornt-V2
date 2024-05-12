import { Component } from '@angular/core';

@Component({
  selector: 'app-visitor-location',
  templateUrl: './visitor-location.component.html',
  styleUrls: ['./visitor-location.component.scss']
})
export class VisitorLocationComponent {

  public asiaMapOptions: google.maps.MapOptions = {
    center: { lat: 47.5162, lng: 100.2167 },
    zoom: 2
  };

  public markers: any[];
  public zoom: number;

  constructor() {
    this.markers = [];

    this.markers.push({
        position: {
          lat: 32.4279,
          lng: 53.6880
        },
        label: {
          color: "black",
          text: "Iran"
        },
      });

      this.markers.push({
        position: {
          lat: 33.9391,
          lng: 67.7100
        },
        label: {
          color: "black",
          text: "Afghanistan"
        },
      });

      this.markers.push({
        position: {
          lat: 23.0225,
          lng: 72.5714
        },
        label: {
          color: "black",
          text: "Ahmedabad"
        },
      });

      this.markers.push({
        position: {
          lat: 39.9042,
          lng: 116.4074
        },
        label: {
          color: "black",
          text: "China"
        },
      });

      this.markers.push({
        position: {
          lat: 35.2809,
          lng: 149.1300
        },
        label: {
          color: "black",
          text: "Australia"
        },
      });
  }
}
