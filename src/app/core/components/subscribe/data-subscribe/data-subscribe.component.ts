import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { StatusCodeResponseRequestAPI } from 'src/app/shared/models/StatusCode';
import { HandlerRequestApis } from 'src/app/shared/utilities/handler-request-apis';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-data-subscribe',
  templateUrl: './data-subscribe.component.html',
  styleUrls: ['./data-subscribe.component.scss']
})
export class DataSubscribeComponent implements OnInit {
  @ViewChild('stepper') myStepper: MatStepper | undefined;

  _userType: number = 0; //private prop

  subscription: Subscription[] = [];
  formSubscribe = new FormGroup({})
  isLinear = false;

  constructor(private fb: FormBuilder, private subscribeService: SubscribeService, private httpHandlerResp: HandlerRequestApis) { }

  ngOnInit(): void { }

  proximaEtapa(command: any | null) {
    command?.UserType != null ? this._userType = command?.UserType : null;
    this.formSubscribe = this.fb.group({
      ...command?.userForm?.controls,
      ...command?.personalForm?.controls,
      ...this.formSubscribe.controls,
      UserType: this._userType
    });

    if (command.finish) {
      this.cadastrar()
    }
    command.nextStepper ? this.myStepper?.next() : null;
  }

  cadastrar() {
    if (!this.formSubscribe.valid) return;
    this.subscription.push(
      this.subscribeService.subscribe(this.formSubscribe.value)
        .subscribe({
          next: resp => {
            this.httpHandlerResp.GetReturnAPIResult(200, null, 'Castro realizado com sucesso', '/login')
          },
          error: error => this.httpHandlerResp.GetReturnAPIResult(error.status, null,
            'Opa! Ocorreu algum problema na hora de realizar seu cadastro, favor tentar novamente ou entrar em contato',
            '/login')
        }));
  }
}
