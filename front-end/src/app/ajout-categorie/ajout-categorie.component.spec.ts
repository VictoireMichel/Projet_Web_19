import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCategorieComponent } from './ajout-categorie.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { FormsModule } from '@angular/forms';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AjoutCategorieComponent', () => {
  let component: AjoutCategorieComponent;
  let fixture: ComponentFixture<AjoutCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCategorieComponent ],
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
    fixture = TestBed.createComponent(AjoutCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
