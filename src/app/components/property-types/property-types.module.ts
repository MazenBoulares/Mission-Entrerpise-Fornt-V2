import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyTypesRoutingModule } from './property-types-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { PropertyTypeComponent } from './property-type/property-type.component';
import { PropertyModule } from '../property/property.module';


@NgModule({
  declarations: [
    PropertyTypeComponent
  ],
  imports: [
    CommonModule,
    PropertyTypesRoutingModule,
    PropertyModule,
    SharedModule
  ]
})
export class PropertyTypesModule { }
