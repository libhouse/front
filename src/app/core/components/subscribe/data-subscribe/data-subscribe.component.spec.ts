import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { returnFormDataSubscribe } from 'src/app/shared/tests/returnDataMockGeneric';
import { SubscribeMockService } from 'src/app/shared/tests/servicesMock/SubscribeMockService';
import { SubscribeService } from '../services/subscribe.service';

import { DataSubscribeComponent } from './data-subscribe.component';

describe('DataSubscribeComponent', () => {
  let component: DataSubscribeComponent;
  let fixture: ComponentFixture<DataSubscribeComponent>;
  let service: SubscribeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSubscribeComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: SubscribeService,
          useValue: SubscribeMockService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(DataSubscribeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SubscribeService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${DataSubscribeComponent.prototype.proximaEtapa.name}
  should call cadastrar().`, () => {
    spyOn(component, 'cadastrar');
    component.proximaEtapa({ finish: true });
    expect(component.cadastrar).toHaveBeenCalled();
  });

  it(`#${DataSubscribeComponent.prototype.proximaEtapa.name}
  should instantiate formbuilder without usertype.`, () => {
    let formGroup = { ...returnFormDataSubscribe(null), finish: false };
    component.proximaEtapa(formGroup);
    expect(component.formSubscribe.value.UserType).toBeNull()
  });

  it(`#${DataSubscribeComponent.prototype.proximaEtapa.name}
  should instantiate formbuilder with usertype.`, () => {
    let formGroup = returnFormDataSubscribe("MORADOR");
    let objectSendProximaEtapa = {
      ...formGroup.formGoups.controls,
      UserType: formGroup.UserType
    }
    component.proximaEtapa(objectSendProximaEtapa);
    expect(component.formSubscribe.value.UserType).not.toBeNull()
  });

});
