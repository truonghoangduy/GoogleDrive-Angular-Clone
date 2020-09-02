import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileActionDialogComponent } from './file-action-dialog.component';

describe('FileActionDialogComponent', () => {
  let component: FileActionDialogComponent;
  let fixture: ComponentFixture<FileActionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileActionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
