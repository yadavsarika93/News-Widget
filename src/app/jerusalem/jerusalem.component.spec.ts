import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerusalemComponent } from './jerusalem.component';

describe('JerusalemComponent', () => {
  let component: JerusalemComponent;
  let fixture: ComponentFixture<JerusalemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerusalemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerusalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
