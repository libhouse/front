import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsPreferencesComponent } from './residents-preferences.component';

describe('ResidentsPreferencesComponent', () => {
  let component: ResidentsPreferencesComponent;
  let fixture: ComponentFixture<ResidentsPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentsPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentsPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
