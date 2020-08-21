import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPageComponent } from './recent-page.component';

describe('RecentPageComponent', () => {
  let component: RecentPageComponent;
  let fixture: ComponentFixture<RecentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
