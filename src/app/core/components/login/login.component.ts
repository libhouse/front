import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { Error } from "../../../shared/models/errors";
import { HandlerRequestApis } from 'src/app/shared/utilities/handler-request-apis';
import { StatusCodeResponseRequestAPI } from 'src/app/shared/models/StatusCode';
import { Store } from '@ngrx/store';
import { Authentication } from '../../store/auth/auth.actions';
import { selectUserAuth } from '../../store/auth/auth.reducer';
import { PasswordValid } from 'src/app/shared/validators/ComparePassword';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];

  formLogin = new FormGroup({});
  confirmSuccess: boolean | null | undefined = false;
  ConfirmationToken: string | null | undefined = null;
  UserEmail: string | null | undefined = null;
  UserId: string | null | undefined = null;
  previousUrl: string | null | undefined;
  errorReturn: Error | null = null;

  teste = this.store.select(selectUserAuth)

  showFormTemplate = (this.ConfirmationToken === null || this.ConfirmationToken === undefined)
    && (this.UserEmail === null || this.UserEmail === undefined)
    && (this.UserId === null || this.UserId === undefined);

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private handlerResultApi: HandlerRequestApis,
    private store: Store<{navigate: string}>,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getParamsRouteLogin();
    this.criarFormulario();
  }

  logar() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      this.store.dispatch(Authentication({ payload: { email, password } }))
    }
  }

  redirectRoute(route: string) {
    this.router.navigateByUrl(route);
  }

  private getParamsRouteLogin(): void {
    console.log("teste")
    this.subscription.push(
      this.activedRoute.paramMap
        .subscribe(paraMap => {
          console.log(paraMap)
          this.UserEmail = paraMap.get('userEmail');
          this.ConfirmationToken = paraMap.get('tokenConfirmEmail');
          this.UserId = paraMap.get('userId');
          this.confirmSuccess = paraMap.get('confirmSuccess') === 'true' ? true : false;
          console.log(this.UserEmail, this.ConfirmationToken, this.UserId, this.confirmSuccess)
          if (this.UserEmail && this.UserId && this.ConfirmationToken) {
            this.subscription.push(
              this.authService.emailConfirmation({ UserEmail: this.UserEmail, UserId: this.UserId, ConfirmationToken: this.ConfirmationToken })
                .subscribe(
                  {
                    next: () => {
                      this.confirmSuccess = true;
                      this.redirectRoute(`login/${this.confirmSuccess}`);
                    },
                    error: err => {
                      this.handlerResultApi.GetReturnAPIResult(err.status, null, 'Ops! Ocorreu algum problema ao confirmar sua conta', null)
                    }
                  }
                ));
          }

          if (this.confirmSuccess) {
            this.handlerResultApi.GetReturnAPIResult(StatusCodeResponseRequestAPI.OK, null, 'Conta confirmada com sucesso', `login`)
          }
        }));
  }

  private criarFormulario() {
    this.formLogin = this.fb.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: PasswordValid("password")
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe());
  }
}
