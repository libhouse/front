import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  template$ = new Observable<string>();
  white$ = new Observable<boolean>();
  icon$ = new Observable<string>();
  message$ = new Observable<string>();
  show$ = new Observable<boolean>();

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.template$ = this.transactionService.template.asObservable();
    this.white$ = this.transactionService.white.asObservable();
    this.icon$ = this.transactionService.icon.asObservable();
    this.message$ = this.transactionService.message.asObservable();
    this.show$ = this.transactionService.show.asObservable();
  }

  dimiss(){
    this.transactionService.dimiss();
  }
}
