import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyTypeComponent } from './property-type/property-type.component';

const routes: Routes = [
  {
    path: 'family-house',
    component: PropertyTypeComponent,
    data: {
      title: "Family House",
      breadcrumb: "Family House"
    }
  },
  {
    path: 'cottage',
    component: PropertyTypeComponent,
    data: {
      title: "Cottage",
      breadcrumb: "Cottage"
    }
  },
  {
    path: 'apartment',
    component: PropertyTypeComponent,
    data: {
      title: "Apartment",
      breadcrumb: "Apartment"
    }
  },
  {
    path: 'condominium',
    component: PropertyTypeComponent,
    data: {
      title: "Condominium",
      breadCrumb: "condominium"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyTypesRoutingModule { }
