import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { RequestPasswordReset } from "../models/request-password-reset";
import { ResetPassword } from "../models/reset-password";

@Injectable({
  providedIn: 'root'
})
export class RequestPasswordResetService {
  constructor(private http: HttpClient) { }

  requestPasswordReset(userCPF: RequestPasswordReset): Observable<boolean> {
    return this.http.patch<boolean>(`${environment.API}users/request-password-reset`, userCPF)
  }

  resetPassword(resetPass: ResetPassword): Observable<any>{
    return this.http.patch<any>(`${environment.API}users/confirm-password-reset`, resetPass)
  }
}
