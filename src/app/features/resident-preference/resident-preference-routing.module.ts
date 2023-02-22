import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentPreferenceComponent } from './resident-preference/resident-preference.component';

const routes: Routes = [
  {
    path: '',
    component: ResidentPreferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentPreferenceRoutingModule { }
