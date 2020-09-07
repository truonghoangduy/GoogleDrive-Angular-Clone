import { TestBed } from '@angular/core/testing';

import { ApiBrowseService } from './api-browse.service';

describe('ApiBrowseService', () => {
  let service: ApiBrowseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBrowseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
