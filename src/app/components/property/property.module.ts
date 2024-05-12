import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyRoutingModule } from './property-routing.module';

import { AddPropertyComponent } from './add-property/add-property.component';
import { SharedModule } from '../../shared/shared.module';
import { PropertyBasicDetailsComponent } from './widgets/property-basic-details/property-basic-details.component';
import { PropertyAddressDetailsComponent } from './widgets/property-address-details/property-address-details.component';
import { PropertyMediaComponent } from './widgets/property-media/property-media.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { GridPanelComponent } from './widgets/grid-panel/grid-panel.component';
import { CommonPropertyBoxComponent } from './widgets/common-property-box/common-property-box.component';
import { PaginationComponent } from './widgets/pagination/pagination.component';
import { FavouriteComponent } from './favourite/favourite.component';


@NgModule({
  declarations: [
    AddPropertyComponent,
    PropertyBasicDetailsComponent,
    PropertyAddressDetailsComponent,
    PropertyMediaComponent,
    EditPropertyComponent,
    PropertyListComponent,
    GridPanelComponent,
    CommonPropertyBoxComponent,
    PaginationComponent,
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    SharedModule,
  ],
  exports: [
    CommonPropertyBoxComponent,
    PaginationComponent
  ]
})
export class PropertyModule { }
