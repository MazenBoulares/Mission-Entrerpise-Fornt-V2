import { Component } from '@angular/core';
import { LayoutService } from '../../../../../shared/services/layout.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {


  constructor(public layout: LayoutService){}

  sidebarToggle(){
    this.layout.sidebarOpen =! this.layout.sidebarOpen
  }
}
