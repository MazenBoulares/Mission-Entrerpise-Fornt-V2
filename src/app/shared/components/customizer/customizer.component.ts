import { Component } from '@angular/core';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent {

  public isOpen: boolean = false;
  public themeColor: boolean = false;
  public themeDirection: boolean = false;
  public themeColor1 = "#ff5c41";
  public themeColor2 = "#ff8c41"

  openCustomizer(){
    this.isOpen = true;
  }

  closeCustomizer(){
    this.isOpen = false;
  }

  changeThemeColor(color: boolean) {
    if (color == true) {
      document.body.classList.add('dark-layout');
      localStorage.setItem('layout_version', 'dark-layout')
    } else {
      document.body.classList.remove('dark-layout');
      localStorage.setItem('layout_version', '')
    }
  }

  changedDirection(direction: boolean) {
    if (direction == true) {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      document.body.classList.add('rtl');
      localStorage.setItem('layout_type', 'rtl')
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body.classList.remove('rtl');
      localStorage.setItem('layout_type', '')
    }
  }

  changedColor1(color:string){
    document.documentElement.style.setProperty('--theme-default6', color);
  }

  changedColor2(color:string){
    document.documentElement.style.setProperty('--theme-default7', color);

  }
}
