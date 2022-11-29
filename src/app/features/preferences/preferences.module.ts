import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PreferencesRoutingModule } from './preferences-routing.module';
import { ResidentsPreferencesComponent } from './residents-preferences/residents-preferences.component';
import { MenuPagesSysComponent } from 'src/app/shared/components/menu-pages-sys/menu-pages-sys.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ResidentsPreferencesComponent
  ],
  imports: [
    CommonModule,
    PreferencesRoutingModule,
    SharedModule
  ]
})
export class PreferencesModule { }
