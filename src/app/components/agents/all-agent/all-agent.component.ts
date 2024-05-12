import { Component } from '@angular/core';
import { users } from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';

@Component({
  selector: 'app-all-agent',
  templateUrl: './all-agent.component.html',
  styleUrls: ['./all-agent.component.scss']
})
export class AllAgentComponent {

  public userData: users[];

  constructor(private propertyService: PropertyService){
    this.propertyService.getUsers().subscribe(response => {
      this.userData = response;
    })
  }
}
