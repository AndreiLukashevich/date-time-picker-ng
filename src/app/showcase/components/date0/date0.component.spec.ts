import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Date0Component } from './date0.component';

describe('Date0Component', () => {
  let component: Date0Component;
  let fixture: ComponentFixture<Date0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Date0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Date0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
