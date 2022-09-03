import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { RequestPasswordResetComponent } from './request-password-reset/request-password-reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskModule } from 'ngx-mask';
import { ResetPasswordConfirmComponent } from './reset-password-confirm/reset-password-confirm.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ResetPasswordComponent,
    RequestPasswordResetComponent,
    ResetPasswordConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ResetPasswordComponent
  ]
})
export class ResetPasswordModule { }
