import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BySOComponent } from './by-so.component';

describe('BySOComponent', () => {
  let component: BySOComponent;
  let fixture: ComponentFixture<BySOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BySOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BySOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
