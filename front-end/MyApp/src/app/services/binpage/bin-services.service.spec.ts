import { TestBed } from '@angular/core/testing';

import { BinServicesService } from './bin-services.service';

describe('BinServicesService', () => {
  let service: BinServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
