import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TransactionComponent } from './components/transaction/transaction.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MenuPagesSysComponent } from './components/menu-pages-sys/menu-pages-sys.component'
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [TransactionComponent, LoaderComponent, MenuPagesSysComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [TransactionComponent, LoaderComponent, MenuPagesSysComponent]
})
export class SharedModule { }
