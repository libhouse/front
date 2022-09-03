import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { returnAvancarEtapaData } from 'src/app/shared/tests/returnDataMockGeneric';
import { CardOptionSubscribeComponent } from './card-option-subscribe/card-option-subscribe.component';

import { ChosePerfilComponent } from './chose-perfil.component';

describe('ChosePerfilComponent', () => {
  let component: ChosePerfilComponent;
  let fixture: ComponentFixture<ChosePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosePerfilComponent, CardOptionSubscribeComponent ],
      imports: [MatIconTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${ChosePerfilComponent.prototype.proximaEtapa.name}
  should trigger (@Output proximaEtapaOut) when called with param PROPRIETARIO.`, () => {
    const proximaEtapaData = returnAvancarEtapaData("prorietario");
    spyOn(component.proximaEtapaOut, 'emit');
    component.proximaEtapa(proximaEtapaData);
    expect(component.proximaEtapaOut.emit)
    .toHaveBeenCalledWith(proximaEtapaData)
  });

});
