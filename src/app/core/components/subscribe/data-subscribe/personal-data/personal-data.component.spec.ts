import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSelectStubComponent } from 'src/app/shared/tests/componentsMock.ts/mat-select';
import { returnFinishSubscribe } from 'src/app/shared/tests/returnDataMockGeneric';

import { PersonalDataComponent } from './personal-data.component';

describe('PersonalDataComponent', () => {
  let component: PersonalDataComponent;
  let fixture: ComponentFixture<PersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PersonalDataComponent,
        MatSelectStubComponent,
        MatIcon
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatIconTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder],  (fb: FormBuilder) => {
    fixture = TestBed.createComponent(PersonalDataComponent);
    component = fixture.componentInstance;

    component.formPersonal = fb.group({
      "Name": [null, [Validators.required]],
      "LastName": [null, [Validators.required]],
      "BirthDate": [null, [Validators.required]],
      "Gender": [null, [Validators.required]],
      "Phone": [null, [Validators.required]],
      "CPF": [null, [Validators.required]]
    });

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${PersonalDataComponent.prototype.voltarHome.name}
  should redirect to login or home if user logged`, () => {
    spyOn(component, 'voltarHome');
    component.voltarHome();
    expect(component.voltarHome).toHaveBeenCalled();
  });

  it(`#${PersonalDataComponent.prototype.proximaEtapa.name}
  should trigger (@Output proximaEtapaOut) when called with param PROPRIETARIO.`, () => {
    const proximaEtapaData = returnFinishSubscribe("prorietario", component.formPersonal);
    spyOn(component.proximo, 'emit');
    component.proximaEtapa();
    expect(component.proximo.emit)
    .toHaveBeenCalledWith(proximaEtapaData)
  });
});
