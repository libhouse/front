import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ISubscribeDataUser } from '../models/subscribe-data-user';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  subscribe(usuario: ISubscribeDataUser): Observable<any> {
    return this.http.post<any>(`${environment.API}users/new-account`, usuario);
  }
}
