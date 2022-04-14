import { TestBed } from '@angular/core/testing';

import { AuthenticathedInterceptor } from './authenticathed.interceptor';

describe('AuthenticathedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthenticathedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthenticathedInterceptor = TestBed.inject(AuthenticathedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
