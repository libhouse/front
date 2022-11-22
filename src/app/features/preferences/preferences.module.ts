import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { ResidentsPreferencesComponent } from './residents-preferences/residents-preferences.component';


@NgModule({
  declarations: [
    ResidentsPreferencesComponent
  ],
  imports: [
    CommonModule,
    PreferencesRoutingModule
  ]
})
export class PreferencesModule { }
