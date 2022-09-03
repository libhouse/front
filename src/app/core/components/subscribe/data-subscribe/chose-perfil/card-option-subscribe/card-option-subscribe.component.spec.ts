import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { returnAvancarEtapaData } from 'src/app/shared/tests/returnDataMockGeneric';

import { CardOptionSubscribeComponent } from './card-option-subscribe.component';

describe('CardOptionSubscribeComponent', () => {
  let component: CardOptionSubscribeComponent;
  let fixture: ComponentFixture<CardOptionSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOptionSubscribeComponent, MatIcon],
      imports: [MatIconTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOptionSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${CardOptionSubscribeComponent.prototype.proximaEtapa.name}
  should trigger (@Output avancarEtapa) when called with param PROPRIETARIO.`, () => {
    const proximaEtapaData = returnAvancarEtapaData("prorietario");
    spyOn(component.avancarEtapa, 'emit');
    component.proximaEtapa('prorietario');
    expect(component.avancarEtapa.emit)
    .toHaveBeenCalledWith(proximaEtapaData)
  });

  it(`#${CardOptionSubscribeComponent.prototype.proximaEtapa.name}
  should trigger (@Output avancarEtapa) when called with param MORADOR.`, () => {
    const proximaEtapaData = returnAvancarEtapaData("morador");
    spyOn(component.avancarEtapa, 'emit');
    component.proximaEtapa('morador');
    expect(component.avancarEtapa.emit)
    .toHaveBeenCalledWith(proximaEtapaData)
  });

});
