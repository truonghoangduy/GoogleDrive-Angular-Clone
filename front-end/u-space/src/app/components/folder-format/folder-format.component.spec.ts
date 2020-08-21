import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderFormatComponent } from './folder-format.component';

describe('FolderFormatComponent', () => {
  let component: FolderFormatComponent;
  let fixture: ComponentFixture<FolderFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
