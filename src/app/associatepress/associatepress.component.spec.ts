import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatepressComponent } from './associatepress.component';

describe('AssociatepressComponent', () => {
  let component: AssociatepressComponent;
  let fixture: ComponentFixture<AssociatepressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatepressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatepressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
