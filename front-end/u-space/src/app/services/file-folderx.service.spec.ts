import { TestBed } from '@angular/core/testing';

import { FileFolderxService } from './file-folderx.service';

describe('FileFolderxService', () => {
  let service: FileFolderxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileFolderxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
