import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecterComponent } from './connecter.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ConnecterComponent', () => {
  let component: ConnecterComponent;
  let fixture: ComponentFixture<ConnecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnecterComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
