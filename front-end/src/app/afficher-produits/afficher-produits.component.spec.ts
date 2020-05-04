import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProduitsComponent } from './afficher-produits.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AfficherProduitsComponent', () => {
  let component: AfficherProduitsComponent;
  let fixture: ComponentFixture<AfficherProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherProduitsComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
