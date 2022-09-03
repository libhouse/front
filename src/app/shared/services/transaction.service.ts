import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, race, Subject, timer } from 'rxjs';

const DURATION: number = 5000;

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  @Output() template = new BehaviorSubject<string>("");
  @Output() message = new BehaviorSubject<string>("");
  @Output() icon = new BehaviorSubject<string>("");
  @Output() white = new BehaviorSubject<boolean>(false);
  @Output() show = new BehaviorSubject<boolean>(false);

  dimiss$ = new Subject();
  constructor() { }

  SuccessMessage(message: string, options: TransactionOptions){
    this.template.next('success');
    this.icon.next(options.icon ?? 'done_outline');
    this.white.next(true);
    this.message.next(message)
    this.showTrasaction()
  }

  ErrorMessage(message: string, options: TransactionOptions){
    this.template.next('error');
    this.icon.next(options.icon ?? 'error');
    this.white.next(true);
    this.message.next(message)
    this.showTrasaction()
  }

  AlertMessage(message: string, options: TransactionOptions){
    this.template.next('alert');
    this.icon.next(options.icon ?? 'alert');
    this.white.next(true);
    this.message.next(message)
    this.showTrasaction()
  }

  dimiss(){
    this.dimiss$.next({});
  }

  showTrasaction(duration?: number) {
    this.show.next(true);

    race(
      <Observable<{}>>timer(duration || DURATION),
      this.dimiss$.asObservable()).subscribe(() => this.show.next(false))
  }
}

export interface TransactionOptions{
  duraction?: number;
  icon?: string;
  message?: string;
}
