import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  genders: Array<any> = [
    { id: 0, name:'masculino'},
    { id: 1, name:'feminino'},
    { id: 2, name:'outros'},
    { id: 3, name:'não declarado'}
  ];

  formPersonal = new FormGroup({});
  @Output() proximo: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private router: Router) {   }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formPersonal = this.fb.group({
      "Name": [null, [Validators.required]],
      "LastName": [null, [Validators.required]],
      "BirthDate": [null, [Validators.required]],
      "Gender": [null, [Validators.required]],
      "Phone": [null, [Validators.required]],
      "CPF": [null, [Validators.required]]
    });
  }

  voltarHome(){
    this.router.navigateByUrl('login')
  }

  proximaEtapa(){
    this.proximo.emit({
      personalForm: this.formPersonal,
      previousStepper: true,
      finish: true
    });
  }

}
