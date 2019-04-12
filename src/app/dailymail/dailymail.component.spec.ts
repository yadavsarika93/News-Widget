import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailymailComponent } from './dailymail.component';

describe('DailymailComponent', () => {
  let component: DailymailComponent;
  let fixture: ComponentFixture<DailymailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailymailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailymailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
