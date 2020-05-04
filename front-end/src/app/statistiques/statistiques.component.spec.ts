import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesComponent } from './statistiques.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StatistiquesComponent', () => {
  let component: StatistiquesComponent;
  let fixture: ComponentFixture<StatistiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquesComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
