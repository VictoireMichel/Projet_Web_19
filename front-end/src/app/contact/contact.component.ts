import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { ContactService } from './contact.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  text = 'Contactez-nous';
  contactForm: FormGroup;
  contact = {
    nom: '',
    email: '',
    sujet: '',
    message: ''
  };
  submitted = false;

  rep: string;

  constructor(private contactService: ContactService, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'nom': new FormControl(this.contact.nom, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
        'sujet': new FormControl(this.contact.sujet, Validators.required),
        'message': new FormControl(this.contactForm, Validators.required)
    });

  }

  onSubmit():void{

    const formValue = this.contactForm.value;
    const message = ("Merci " + formValue['nom'] + " d'avoir posé une question ayant comme sujet : " + formValue['sujet'] + ", nous allons transmettre ce message au gérant : " + formValue['message'] + " !");
    console.log(message);

    this.contact.nom = formValue.nom;
    this.contact.email = formValue.email;
    this.contact.sujet = formValue.sujet;
    this.contact.message = formValue.message;

    console.log(this.contact);


    this.contactService.getContact(this.contact).subscribe(
      data => this.rep = data["message"]);


    this.submitted = true;


  }



  ngOnInit(): void {
  }

}
