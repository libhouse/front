import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TransactionComponent } from './components/transaction/transaction.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'



@NgModule({
  declarations: [TransactionComponent, LoaderComponent, NavBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [TransactionComponent, LoaderComponent]
})
export class SharedModule { }
