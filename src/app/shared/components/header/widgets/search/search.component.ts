import { Component } from '@angular/core';
import { Menu, NavService } from '../../../../../shared/services/nav.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public menuItems: Menu[] = [];
  public items: Menu[] = [];
  public isOpen: boolean = false;

  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = '';


  constructor(public navServices: NavService) {
    this.items = navServices.MENUITEM;
  }

  openSearch(){
    this.isOpen =! this.isOpen;
    if(window.innerWidth < 768){
      if(this.isOpen == false){
        this.text = "";
        this.searchResult = false;
      }
    }
  }

  searchTerm(term: string){
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.items.filter(menuItems => {
      if (!menuItems?.title) return false
      if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
        items.push(menuItems);
      }
      if (!menuItems.children) return false
      menuItems.children.filter(subItems => {
        if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = menuItems.icon
          items.push(subItems);
        }
        if (!subItems.children) return false
        subItems.children.filter(suSubItems => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon
            items.push(suSubItems);
          }
        })
        return
      })
      this.checkSearchResultEmpty(items)
      this.menuItems = items
      return
    }
    );
    return

  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
  }

  clickOutside(): void {
    this.searchResult = false;
    this.searchResultEmpty = false;
    this.text = "";
  }
}
