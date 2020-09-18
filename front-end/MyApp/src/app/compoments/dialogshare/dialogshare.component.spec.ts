import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogshareComponent } from './dialogshare.component';

describe('DialogshareComponent', () => {
  let component: DialogshareComponent;
  let fixture: ComponentFixture<DialogshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
