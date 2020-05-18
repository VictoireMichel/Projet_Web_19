import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.scss']
})
export class ConnecterComponent implements OnInit {
  text = 'Connectez-vous';
  connexionForm: FormGroup;
  connexion = {
    email: '',
    password: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.connexionForm = new FormGroup({
      'email': new FormControl(this.connexion.email, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.connexion.password,
        Validators.required)
    });

  }

  onSubmit():void{
    const formValue = this.connexionForm.value;
    const message = (formValue['email'] + "   , vous avez demmandé à vous connecter");
    console.log(message);
    console.log(formValue.password);
    this.submitted = true;
  }

  ngOnInit(): void {
  }


}


