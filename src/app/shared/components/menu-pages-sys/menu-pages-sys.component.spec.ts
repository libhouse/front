import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPagesSysComponent } from './menu-pages-sys.component';

describe('MenuPagesSysComponent', () => {
  let component: MenuPagesSysComponent;
  let fixture: ComponentFixture<MenuPagesSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPagesSysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPagesSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
