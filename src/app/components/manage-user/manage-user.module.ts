import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserRoutingModule } from './manage-user-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-profile/user-details/user-details.component';
import { MonthlyInstallmentComponent } from './user-profile/monthly-installment/monthly-installment.component';
import { AboutUserComponent } from './user-profile/about-user/about-user.component';
import { RecentPropertyComponent } from './user-profile/recent-property/recent-property.component';
import { TotalUsersComponent } from './user-profile/total-users/total-users.component';
import { FriendsComponent } from './user-profile/friends/friends.component';
import { RecentEarningComponent } from './user-profile/recent-earning/recent-earning.component';
import { FollowingComponent } from './user-profile/following/following.component';
import { ProjectMeetingsComponent } from './user-profile/project-meetings/project-meetings.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserPersonalDetailsComponent } from './widgets/user-personal-details/user-personal-details.component';
import { UserLoginDetailsComponent } from './widgets/user-login-details/user-login-details.component';
import { UserMediaComponent } from './widgets/user-media/user-media.component';
import { AddUserWizardComponent } from './add-user-wizard/add-user-wizard.component';
import { UserWizardStepsComponent } from './widgets/user-wizard-steps/user-wizard-steps.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AllUserComponent } from './all-user/all-user.component';
import { CommonUserDetailsComponent } from './widgets/common-user-details/common-user-details.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    UserDetailsComponent,
    ProjectMeetingsComponent,
    MonthlyInstallmentComponent,
    AboutUserComponent,
    RecentPropertyComponent,
    TotalUsersComponent,
    FriendsComponent,
    RecentEarningComponent,
    FollowingComponent,
    AddUserComponent,
    UserPersonalDetailsComponent,
    UserLoginDetailsComponent,
    UserMediaComponent,
    AddUserWizardComponent,
    UserWizardStepsComponent,
    EditUserComponent,
    AllUserComponent,
    CommonUserDetailsComponent
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    SharedModule,
  ],
  exports: [
    FollowingComponent,
    AboutUserComponent,
    ProjectMeetingsComponent,
    FriendsComponent,
    RecentPropertyComponent,
    TotalUsersComponent,
    MonthlyInstallmentComponent,
    RecentEarningComponent,
    UserPersonalDetailsComponent,
    UserLoginDetailsComponent,
    UserMediaComponent,
    UserWizardStepsComponent,
    CommonUserDetailsComponent
  ]
})
export class ManageUserModule { }
