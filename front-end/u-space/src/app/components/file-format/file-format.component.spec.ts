import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFormatComponent } from './file-format.component';

describe('FileFormatComponent', () => {
  let component: FileFormatComponent;
  let fixture: ComponentFixture<FileFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
