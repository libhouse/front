import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationFail, AuthenticationSuccess } from './auth.actions';
import * as authActions from './auth.actions';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
    private transaction: TransactionService) { }


  authentication = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.Authentication),
      map((action: any) => action.payload),
      exhaustMap(
        (action) => this.authService.authentication({ email: action.email, password: action.password })
        .pipe(
          map(resp => {
            return AuthenticationSuccess({ payload: resp })
          }),
          catchError(error => of(AuthenticationFail({ error: error })))
        )
      )
    )
  );

  authenticationSuccess = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.AuthenticationSuccess),
      map((action: any) => action.payload),
      tap(res => {})
    ), {dispatch: false}
  );

  authenticationFail = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.AuthenticationFail),
      map((resp:any)  => {
        if(Array.isArray(resp.error.error))
          return resp.error.error[0]
        else
          return { title: resp.error.error.Title, message: resp.error.error.Message }
      }),
      tap(error => {
        this.transaction.ErrorMessage(`${error.title}`, {})
      })
      ), {dispatch: false}
  );

  refreshToken = createEffect(
    () => this.actions$.pipe(
      ofType(authActions.RefresToken),
      map((action: any) => action.payload),
      exhaustMap(
        (action) => {
          return this.tokenStorageService.saveUser(action)
        .pipe(
          map(resp => {
            return authActions.RefresTokenSuccess({ payload: resp })
          }),
          catchError(error => of(authActions.RefresTokenFail({ error: error })))
        )}
      )
    )
  );

}
