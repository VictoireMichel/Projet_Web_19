import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ConnecterService } from './connecter.service';
import {Router} from "@angular/router";

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
    mdp: ''
  };
  submitted = false;

  constructor(private connecterService: ConnecterService, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.connexionForm = new FormGroup({
      'email': new FormControl(this.connexion.email, [
        Validators.required,
        Validators.email
      ]),
      'mdp': new FormControl(this.connexion.mdp,
        Validators.required)
    });

  }

  onSubmit():void{
    const formValue = this.connexionForm.value;
    const message = (formValue['email'] + "   , vous avez demmandé à vous connecter");
    console.log(message);
    console.log(formValue.mdp);

    this.connexion.email = formValue.email;
    this.connexion.mdp = formValue.mdp;

    console.log(this.connexion);

    this.connecterService.getConnexion(this.connexion);

    this.submitted = true;
  }

  ngOnInit(): void {
  }





}


