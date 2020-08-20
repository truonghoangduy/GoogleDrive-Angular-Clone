import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsHeadComponent } from './thumbnails-head.component';

describe('ThumbnailsHeadComponent', () => {
  let component: ThumbnailsHeadComponent;
  let fixture: ComponentFixture<ThumbnailsHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
