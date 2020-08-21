import { TestBed } from '@angular/core/testing';

import { FunctionalService } from './functional.service';

describe('FunctionalService', () => {
  let service: FunctionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
