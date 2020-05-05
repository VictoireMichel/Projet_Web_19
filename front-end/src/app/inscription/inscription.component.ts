import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  text = 'Inscription';
  inscriptionForm: FormGroup;
  inscription = {
    nom: '',
    prenom: '',
    societe: '',
    email: '',
    password: '',
    code: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.inscriptionForm = new FormGroup({
      'nom': new FormControl(this.inscription.nom, [
        Validators.required,
        Validators.minLength(2),
      ]),
      'prenom': new FormControl(this.inscription.prenom, [
        Validators.required,
        Validators.minLength(2),
      ]),
      'societe': new FormControl(this.inscription.societe, [
        Validators.required,
        Validators.minLength(2),
      ]),
      'email': new FormControl(this.inscription.email, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.inscription.password, Validators.required),
      'code': new FormControl(this.inscriptionForm, Validators.required)
    });

  }

  onSubmit():void{

    const formValue = this.inscriptionForm.value;
    const message = ("Merci " + formValue['nom'] + " " + formValue['prenom'] + " , votre inscription est en cours de validation ! ");
    console.log(message);
    this.submitted = true;
  }



  ngOnInit(): void {
  }

}
