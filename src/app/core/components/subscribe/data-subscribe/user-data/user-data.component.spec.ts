import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import { returnFormUser, returnFormUserData } from 'src/app/shared/tests/returnDataMockGeneric';
import { UserDataComponent } from './user-data.component';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDataComponent, MatIcon],
      imports: [
        MatIconTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${UserDataComponent.prototype.logar.name}
  should call proximaEtapa().`, () => {
    spyOn(component, 'proximaEtapa');
    let fb = new FormBuilder();
    component.formUser = returnFormUser(fb);
    component.logar();
    expect(component.proximaEtapa).toHaveBeenCalled();
  });

  it(`#${UserDataComponent.prototype.proximaEtapa.name}
  should trigger (@Output proximo) when called.`, () => {
    let fb = new FormBuilder();
    component.formUser = returnFormUser(fb);
    const proximaEtapaData = returnFormUserData(component.formUser);
    spyOn(component.proximo, 'emit');
    component.proximaEtapa();
    expect(component.proximo.emit)
    .toHaveBeenCalledWith(proximaEtapaData)
  });

});
