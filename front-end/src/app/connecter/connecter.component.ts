import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ConnecterService } from './connecter.service';
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

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

  rep: string;
  data: number;

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


    this.connecterService.getConnexion(this.connexion).subscribe(data => {
      console.log(data);
      this.data = data["success"];
      console.log(this.data);

      if(this.data == 1){
        this.router.navigateByUrl('/afficher-produits');
      }
      if(this.data == 2){
        this.router.navigateByUrl('/admin');
      }
      else {
          this.rep = data["data"];
          console.log(this.rep);
      }
    });







    this.submitted = true;
  }

  ngOnInit(): void {
  }





}


