import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../../../shared/services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public containerClass: string = '';

  constructor(public layout: LayoutService, public router: Router){
    if(window.innerWidth < 992){
      this.layout.sidebarOpen = true;
    }
    if(window.location.pathname == '/manage-user/add-user-wizard'){
      this.containerClass = 'property-wizard horizontal-wizard'
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number; }; }) {
    let number = event.target.innerWidth;
    if(number < 992){
      this.layout.sidebarOpen = true;
    }else{
      this.layout.sidebarOpen = false
    }
  }

  sidebarToggle(){
    this.layout.sidebarOpen =! this.layout.sidebarOpen
  }


}
