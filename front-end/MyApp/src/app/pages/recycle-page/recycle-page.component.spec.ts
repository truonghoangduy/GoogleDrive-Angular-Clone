import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclePageComponent } from './recycle-page.component';

describe('RecyclePageComponent', () => {
  let component: RecyclePageComponent;
  let fixture: ComponentFixture<RecyclePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
