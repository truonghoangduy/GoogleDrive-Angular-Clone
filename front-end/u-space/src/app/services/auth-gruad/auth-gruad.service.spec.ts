import { TestBed } from '@angular/core/testing';

import { AuthGruadService } from './auth-gruad.service';

describe('AuthGruadService', () => {
  let service: AuthGruadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGruadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
