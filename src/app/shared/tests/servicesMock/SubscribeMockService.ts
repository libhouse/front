import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ISubscribeDataUser } from "src/app/core/components/subscribe/models/subscribe-data-user";
import { environment } from "src/environments/environment";

export const mockData = {
  api: `${environment.API}subscribe`,
  data: {
    BirthDate: '',
    CPF: '',
    ConfrmPassword: '',
    Email: '',
    Gender: 1,
    LastName: '',
    Name: '',
    Password: '',
    Phone: '',
    UserType: 1
  }
};

@Injectable({
  providedIn: 'root'
})
export class SubscribeMockService {

  public user: ISubscribeDataUser = {
    BirthDate: '',
    CPF: '',
    ConfrmPassword: '',
    Email: '',
    Gender: 1,
    LastName: '',
    Name: '',
    Password: '',
    Phone: '',
    UserType: 1
  }

  constructor() { }

  subscribe(usuario: ISubscribeDataUser): Observable<any> {
    return of(usuario);
  }
}
