import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestPasswordResetSuccess } from './models/RequestPasswordResetSuccess';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  confirmAccountSuccess: RequestPasswordResetSuccess | undefined | null;

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(a => {
      if(a['email'] !== undefined && a['email'] !== null){
        this.confirmAccountSuccess = {
          email: a['email'],
          token: a['token'],
          userId: a['userId']
        }
      }else{
        this.confirmAccountSuccess = undefined;
      }
    });
  }
}
