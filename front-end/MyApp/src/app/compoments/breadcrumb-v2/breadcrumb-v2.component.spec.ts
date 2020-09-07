import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbV2Component } from './breadcrumb-v2.component';

describe('BreadcrumbV2Component', () => {
  let component: BreadcrumbV2Component;
  let fixture: ComponentFixture<BreadcrumbV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
