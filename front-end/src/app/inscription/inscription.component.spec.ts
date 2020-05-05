import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule, By} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DebugElement} from "@angular/core";


import { InscriptionComponent } from './inscription.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';



describe('InscriptionComponent', () => {
  let component: InscriptionComponent;
  let fixture: ComponentFixture<InscriptionComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(InscriptionComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it('should have as text Inscription', async(() => {
    expect(component.text).toEqual('Inscription');
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
    component.inscriptionForm.controls['nom'].setValue('');
    component.inscriptionForm.controls['prenom'].setValue('');
    component.inscriptionForm.controls['societe'].setValue('');
    component.inscriptionForm.controls['email'].setValue('');
    component.inscriptionForm.controls['password'].setValue('');
    component.inscriptionForm.controls['code'].setValue('');
    expect(component.inscriptionForm.valid).toBeFalsy();
  }));

  it('form should be valid' , async(() => {
    component.inscriptionForm.controls['nom'].setValue('Janssens');
    component.inscriptionForm.controls['prenom'].setValue('Florent');
    component.inscriptionForm.controls['societe'].setValue('LeBonMarchand');
    component.inscriptionForm.controls['email'].setValue('florent.janssens@gmail.com');
    component.inscriptionForm.controls['password'].setValue('user1234');
    component.inscriptionForm.controls['code'].setValue('12345');
    expect(component.inscriptionForm.valid).toBeTruthy();
  }));

});

