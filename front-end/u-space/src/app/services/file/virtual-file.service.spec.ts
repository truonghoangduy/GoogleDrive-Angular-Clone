import { TestBed } from '@angular/core/testing';

import { VirtualFileService } from './virtual-file.service';

describe('VirtualFileService', () => {
  let service: VirtualFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
