import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StatusCodeResponseRequestAPI } from 'src/app/shared/models/StatusCode';
import { HandlerRequestApis } from 'src/app/shared/utilities/handler-request-apis';
import { ComparePassword } from 'src/app/shared/validators/ComparePassword';
import { RequestPasswordResetService } from '../services/request-password-reset.service';

@Component({
  selector: 'app-reset-password-confirm',
  templateUrl: './reset-password-confirm.component.html',
  styleUrls: ['./reset-password-confirm.component.scss']
})
export class ResetPasswordConfirmComponent implements OnInit {

  private subscription: Subscription[] = [];

  @Input() email: String = "";
  @Input() userId: String = "";
  @Input() token: String = "";
  hideConfirmPassword: boolean = true;
  hidePassword: boolean = true;
  formRequestPasswordReset = new FormGroup({});
  errorReturn: Error | null = null;

  constructor(
    private requestPasswordResetService: RequestPasswordResetService,
    private fb: FormBuilder,
    private httpHandlerResp: HandlerRequestApis) { }

  ngOnInit(): void {
    this.createForm();
  }

  requestPasswordReset() {
    if (this.formRequestPasswordReset.valid) { }
  }

  passwordReset() {
    if (this.formRequestPasswordReset.valid) {
      this.subscription.push(
        this.requestPasswordResetService.resetPassword({
          confirmPassword: this.formRequestPasswordReset.value.ConfirmPassword,
          password: this.formRequestPasswordReset.value.Password,
          passwordResetToken: this.token,
          userEmail: this.email
        }).subscribe(resp => {
          this.httpHandlerResp.GetReturnAPIResult(StatusCodeResponseRequestAPI.NOCONTENT, null, 'Senha alterada com sucesso!', 'login')
        }))
    } else { }
  }

  ngOndestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe);
  }

  private createForm() {
    this.formRequestPasswordReset = this.fb.group({
      "Password": [null, [Validators.required, Validators.minLength(6),]],
      "ConfirmPassword": [null, [Validators.required, Validators.minLength(6)]]
    },
      {
        validators: ComparePassword("Password", "ConfirmPassword")
      });
  }
}
