import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentPreferenceComponent } from './resident-preference.component';

describe('ResidentPreferenceComponent', () => {
  let component: ResidentPreferenceComponent;
  let fixture: ComponentFixture<ResidentPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
