import { Component } from '@angular/core';
import { projectMeetings } from '../../../../shared/data/data/manage-user/manage-user';

@Component({
  selector: 'app-project-meetings',
  templateUrl: './project-meetings.component.html',
  styleUrls: ['./project-meetings.component.scss']
})
export class ProjectMeetingsComponent {

  public projectMeetings = projectMeetings;

}
