import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShareComponent } from './list-share.component';

describe('ListShareComponent', () => {
  let component: ListShareComponent;
  let fixture: ComponentFixture<ListShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
