import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzfeedComponent } from './buzzfeed.component';

describe('BuzzfeedComponent', () => {
  let component: BuzzfeedComponent;
  let fixture: ComponentFixture<BuzzfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
