import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeePage } from './redee.page';

describe('RedeePage', () => {
  let component: RedeePage;
  let fixture: ComponentFixture<RedeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
