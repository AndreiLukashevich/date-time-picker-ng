import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Date1Component } from './date1.component';

describe('Date1Component', () => {
  let component: Date1Component;
  let fixture: ComponentFixture<Date1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Date1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Date1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
