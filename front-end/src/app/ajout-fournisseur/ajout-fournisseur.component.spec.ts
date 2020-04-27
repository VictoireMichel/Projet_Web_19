import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFournisseurComponent } from './ajout-fournisseur.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { FormsModule } from '@angular/forms';

describe('AjoutFournisseurComponent', () => {
  let component: AjoutFournisseurComponent;
  let fixture: ComponentFixture<AjoutFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutFournisseurComponent ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
