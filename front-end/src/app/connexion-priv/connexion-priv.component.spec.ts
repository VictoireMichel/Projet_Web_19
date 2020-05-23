import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionPrivComponent } from './connexion-priv.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ConnexionPrivComponent', () => {
  let component: ConnexionPrivComponent;
  let fixture: ComponentFixture<ConnexionPrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionPrivComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionPrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
