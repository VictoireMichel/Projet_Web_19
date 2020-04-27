import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUtilisateurComponent } from './modifier-utilisateur.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { FormsModule } from '@angular/forms';

describe('ModifierUtilisateurComponent', () => {
  let component: ModifierUtilisateurComponent;
  let fixture: ComponentFixture<ModifierUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierUtilisateurComponent ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
