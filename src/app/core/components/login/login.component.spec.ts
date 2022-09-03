import { HttpClientTestingModule } from '@angular/common/http/testing';
import { not } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { returnFormLogin } from 'src/app/shared/tests/returnDataMockGeneric';
import { AuthenticationService } from '../../services/authentication.service';

import { LoginComponent } from './login.component';
import { IAuthLogin } from './models/auth-login';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formTest: FormGroup;
  let autService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatSnackBarModule
      ],
      providers: [
        AuthenticationService
      ]
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    formTest = returnFormLogin();
    autService = TestBed.inject(AuthenticationService)
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${LoginComponent.prototype.logar.name} should redirect to home when form valid`, () => {
    component.formLogin = formTest;
    const returnAuth: IAuthLogin = {
      accessToken: '',
      claims: [],
      user: {
        birthDate: new Date,
        email: '',
        fullName: '',
        gender: '',
        userType: ''
      }
    }
    spyOn(autService, 'authentication').and.returnValue(of(returnAuth));
    component.logar();
    expect(autService.authentication).toHaveBeenCalled();
  })

});
