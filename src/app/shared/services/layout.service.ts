import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public sidebarOpen: boolean = false;

}
