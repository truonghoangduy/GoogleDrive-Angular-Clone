import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinPageComponent } from './pin-page.component';

describe('PinPageComponent', () => {
  let component: PinPageComponent;
  let fixture: ComponentFixture<PinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
