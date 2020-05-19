import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule, By} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DebugElement} from "@angular/core";


import { ConnecterComponent } from './connecter.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { ConnecterService} from "./connecter.service";

describe('ConnecterComponent', () => {
  let component: ConnecterComponent;
  let fixture: ComponentFixture<ConnecterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnecterComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClient
      ],
      providers: [ConnecterService]

    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(ConnecterComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));
/*
it('should have as text Connectez-vous', async(() => {
  expect(component.text).toEqual('Connectez-vous');
}));

it( 'should set submited to true', async(() => {
  component.onSubmit();
  expect(component.submitted).toBeTruthy();
}));

it('should call the onSubmited method' , async(() => {
  fixture.detectChanges();
  spyOn(component, "onSubmit");
  el = fixture.debugElement.query(By.css('button')).nativeElement;
  expect(component.onSubmit).toHaveBeenCalledTimes(0);
}));


it('form should be invalid' , async(() => {
  component.connexionForm.controls['email'].setValue('');
  component.connexionForm.controls['password'].setValue('');
  expect(component.connexionForm.valid).toBeFalsy();
}));

it('form should be valid' , async(() => {
  component.connexionForm.controls['email'].setValue('florent.janssens@gmail.com');
  component.connexionForm.controls['password'].setValue('user1234');
  expect(component.connexionForm.valid).toBeTruthy();
}));
*/
});

