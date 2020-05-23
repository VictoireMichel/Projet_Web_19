import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {ConnecterService} from "../connecter/connecter.service";

@Component({
  selector: 'app-connecter-admin',
  templateUrl: './connecter-admin.component.html',
  styleUrls: ['./connecter-admin.component.scss']
})
export class ConnecterAdminComponent implements OnInit {

  text = "Connectez-vous à l'administration";
  connexionForm: FormGroup;
  connexion = {
    email: '',
    mdp: ''
  };
  submitted = false;

  rep: string;

  constructor(private router: Router, private connecterService: ConnecterService) { }

  ngOnInit(): void {
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


    this.connecterService.getConnexion(this.connexion).subscribe(data => {
      if(this.connexion.email == "michelvictoire@gmail.com" && this.connexion.mdp == "user1234"){
        this.router.navigateByUrl('/admin');
      }
      else {
        this.rep = data["data"];
        console.log(this.rep);
      }
    });



    this.submitted = true;
  }

}
