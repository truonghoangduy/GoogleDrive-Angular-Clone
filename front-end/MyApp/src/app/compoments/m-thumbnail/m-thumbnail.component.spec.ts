import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MThumbnailComponent } from './m-thumbnail.component';

describe('MThumbnailComponent', () => {
  let component: MThumbnailComponent;
  let fixture: ComponentFixture<MThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
