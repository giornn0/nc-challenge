import { TestBed } from '@angular/core/testing';

import { HasTokenGuard } from './has-token.guard';

describe('HasTokenGuard', () => {
  let guard: HasTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
