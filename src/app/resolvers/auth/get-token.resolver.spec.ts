import { TestBed } from '@angular/core/testing';

import { GetTokenResolver } from './get-token.resolver';

describe('GetTokenResolver', () => {
  let resolver: GetTokenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetTokenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
