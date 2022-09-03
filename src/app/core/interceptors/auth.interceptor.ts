import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, throwError, BehaviorSubject, switchMap, filter, take } from 'rxjs';
import { IAuthLogin } from '../components/login/models/auth-login';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';
import { RefresToken } from '../store/auth/auth.actions';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private authService: AuthenticationService, private tokenService: TokenStorageService, private router: Router, private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    return next.handle(authReq)
    .pipe(
      catchError(error => {
      if (error.status == 401) {
        return this.handle401Error(authReq, next);
      }
      return throwError(error);
    }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
      const user = this.tokenService.getUser()
      if (user){
        return this.authService.refreshToken(user.accessToken, user.refreshToken).pipe(
          switchMap((userReload: IAuthLogin) => {
            console.log(userReload)
            this.store.dispatch(RefresToken({payload : userReload}))
            return next.handle(request);
          }),
          catchError((err) => {
            this.isRefreshing = false;
            return throwError(err);
          })
        );
      }else {
        this.router.navigate(['login']);
      }
    return next.handle(request);
  }
}
