import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  text = 'Connectez-vous';
  contactForm: FormGroup;
  contact = {
    nom: '',
    email: '',
    sujet: '',
    message: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'nom': new FormControl(this.contact.nom, [
        Validators.required,
        Validators.minLength(4)
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
    this.submitted = true;
  }



  ngOnInit(): void {
  }

}
