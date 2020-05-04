import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCategorieComponent } from './modifier-categorie.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';

describe('ModifierCategorieComponent', () => {
  let component: ModifierCategorieComponent;
  let fixture: ComponentFixture<ModifierCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierCategorieComponent ],
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
    fixture = TestBed.createComponent(ModifierCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
