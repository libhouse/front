import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestPasswordResetService } from '../services/request-password-reset.service';
import { HandlerRequestApis } from 'src/app/shared/utilities/handler-request-apis';
import { StatusCodeResponseRequestAPI } from 'src/app/shared/models/StatusCode';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.scss']
})
export class RequestPasswordResetComponent implements OnInit {

  private subscription: Subscription[] = [];

  formRequestPasswordReset = new FormGroup({});

  constructor(
    private requestPasswordResetService: RequestPasswordResetService,
    private fb: FormBuilder,
    private router: Router,
    private httpHandlerResp: HandlerRequestApis) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe);
  }

  requestPasswordReset() {
    if (this.formRequestPasswordReset.valid) {
      const { CPF } = this.formRequestPasswordReset.value;

      this.subscription.push(
        this.requestPasswordResetService.requestPasswordReset({ CPF })
          .subscribe({
            next: () => {
              this.httpHandlerResp.GetReturnAPIResult(StatusCodeResponseRequestAPI.OK, null, 'Acabamos de enviar um email para continuar com a redefinicao de senha.', null)
            },
            error: (err) => {
              this.httpHandlerResp.GetReturnAPIResult(err.status, null, 'Ops! Houve algum problema ao tentar recuperar sua senha. Favor tente novamente ou entre em contato conosco.', null)
            }
          })
      );
    }
  }

  backToLogin() {
    this.router.navigateByUrl('login')
  }

  private createForm() {
    this.formRequestPasswordReset = this.fb.group({
      "CPF": [null, [Validators.required]]
    });
  }
}
