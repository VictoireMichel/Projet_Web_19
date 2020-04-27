import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUtilisateurComponent } from './ajout-utilisateur.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { FormsModule } from '@angular/forms';

describe('AjoutUtilisateurComponent', () => {
  let component: AjoutUtilisateurComponent;
  let fixture: ComponentFixture<AjoutUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutUtilisateurComponent ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
