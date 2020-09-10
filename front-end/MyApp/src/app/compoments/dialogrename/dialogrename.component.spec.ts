import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogrenameComponent } from './dialogrename.component';

describe('DialogrenameComponent', () => {
  let component: DialogrenameComponent;
  let fixture: ComponentFixture<DialogrenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogrenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogrenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
