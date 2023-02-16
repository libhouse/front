import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentPreferenceRoutingModule } from './resident-preference-routing.module';
import { ResidentPreferenceComponent } from './resident-preference/resident-preference.component';


@NgModule({
  declarations: [
    ResidentPreferenceComponent
  ],
  imports: [
    CommonModule,
    ResidentPreferenceRoutingModule
  ]
})
export class ResidentPreferenceModule { }
