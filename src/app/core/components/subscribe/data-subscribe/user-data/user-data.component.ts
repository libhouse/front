import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComparePassword } from 'src/app/shared/validators/ComparePassword';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Output() proximo: EventEmitter<any> = new EventEmitter<any>();

  formUser = new FormGroup({});

  hideConfirmPassword: boolean = true;
  hidePassword: boolean = true;

  constructor(private fb: FormBuilder) {   }

  ngOnInit(): void {
    this.criarFormulario();
  }

  logar() {
    if (this.formUser.valid) {
      this.proximaEtapa();
    }
  }

  criarFormulario(){
    this.formUser = this.fb.group({
      "Email": [null, [Validators.required, Validators.email]],
      "Password": [null, [Validators.required, Validators.minLength(6), ]],
      "ConfirmPassword": [null, [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: ComparePassword("Password", "ConfirmPassword")
    });
  }

  proximaEtapa(){
    this.proximo.emit({
      userForm: this.formUser,
      nextStepper: true
    });
  }
}
