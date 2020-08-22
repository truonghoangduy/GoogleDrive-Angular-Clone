import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTestComponent } from './render-test.component';

describe('RenderTestComponent', () => {
  let component: RenderTestComponent;
  let fixture: ComponentFixture<RenderTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
