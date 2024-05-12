import { Component } from '@angular/core';
import { assignessData } from '../../../shared/data/data/dashboard/dashboard';

@Component({
  selector: 'app-assigness',
  templateUrl: './assigness.component.html',
  styleUrls: ['./assigness.component.scss']
})
export class AssignessComponent {

  public assignessData = assignessData;
}
