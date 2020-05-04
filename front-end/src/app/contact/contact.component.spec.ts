import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DebugElement} from "@angular/core";

import { ContactComponent } from './contact.component';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

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
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['nom'].setValue('');
    component.contactForm.controls['sujet'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it('form should be valid' , async(() => {
    component.contactForm.controls['email'].setValue('florent.janssens@gmail.com');
    component.contactForm.controls['nom'].setValue('florent');
    component.contactForm.controls['sujet'].setValue('commande pomme');
    expect(component.contactForm.valid).toBeTruthy();
  }));

});





/*
beforeEach(() => {
  fixture = TestBed.createComponent(ContactComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});


 */
