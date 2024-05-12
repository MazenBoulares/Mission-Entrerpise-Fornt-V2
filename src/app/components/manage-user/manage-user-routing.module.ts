import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserWizardComponent } from './add-user-wizard/add-user-wizard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AllUserComponent } from './all-user/all-user.component';

const routes: Routes = [
  {
    path: 'user-profile',
    component: UserProfileComponent,
    data: {
      title: "User Profile",
      breadcrumb: "User Profile"
    }
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    data: {
      title: "Add User",
      breadcrumb: "Add User"
    }
  },
  {
    path: 'add-user-wizard',
    component: AddUserWizardComponent,
    data: {
      title: "Add User Wizard",
      breadcrumb: "Add User Wizard"
    }
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    data: {
      title: "Edit User",
      breadcrumb: "Edit User"
    }
  },
   {
    path: 'all-user',
    component: AllUserComponent,
    data: {
      title: "All Users",
      breadcrumb: "All Users"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUserRoutingModule { }
