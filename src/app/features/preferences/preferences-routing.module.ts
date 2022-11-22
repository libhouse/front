import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeUserGuard } from './guards/type-user.guard';
import { ResidentsPreferencesComponent } from './residents-preferences/residents-preferences.component';

const routes: Routes = [
  {
    path:'',
    canActivate: [TypeUserGuard]
  },
  {
    path:'resident',
    component: ResidentsPreferencesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencesRoutingModule { }
