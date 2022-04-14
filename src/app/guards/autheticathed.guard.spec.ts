import { TestBed } from '@angular/core/testing';

import { AutheticathedGuard } from './autheticathed.guard';

describe('AutheticathedGuard', () => {
  let guard: AutheticathedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutheticathedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
