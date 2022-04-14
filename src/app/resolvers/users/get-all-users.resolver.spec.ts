import { TestBed } from '@angular/core/testing';

import { GetAllUsersResolver } from './get-all-users.resolver';

describe('GetAllUsersResolver', () => {
  let resolver: GetAllUsersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetAllUsersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
