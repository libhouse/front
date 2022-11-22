import { TestBed } from '@angular/core/testing';

import { TypeUserGuard } from './type-user.guard';

describe('TypeUserGuard', () => {
  let guard: TypeUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TypeUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
