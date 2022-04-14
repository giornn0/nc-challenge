import { TestBed } from '@angular/core/testing';

import { GetAllMembersResolver } from './get-all-members.resolver';

describe('GetAllMembersResolver', () => {
  let resolver: GetAllMembersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetAllMembersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
