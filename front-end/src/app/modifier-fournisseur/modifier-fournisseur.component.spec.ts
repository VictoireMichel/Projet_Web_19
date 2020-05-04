import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFournisseurComponent } from './modifier-fournisseur.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';

describe('ModifierFournisseurComponent', () => {
  let component: ModifierFournisseurComponent;
  let fixture: ComponentFixture<ModifierFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierFournisseurComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
