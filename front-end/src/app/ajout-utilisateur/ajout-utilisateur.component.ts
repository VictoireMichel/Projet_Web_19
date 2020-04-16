import { Component, OnInit } from '@angular/core';
import {Utilisateurs} from "../utilisateurs/utilisateurs.interface";
import {UtilisateursService} from "../utilisateurs/utilisateurs.service";

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.scss']
})
export class AjoutUtilisateurComponent implements OnInit {

  utilisateurs: Utilisateurs = {
    id: null,
    pseudo:"",
    mdp:"",
    email:"",
    adresse:"",
    telephone:"",
  };

  constructor(private utilisateursService: UtilisateursService) { }

  ngOnInit(): void {
  }

  createUtilisateur(data: Utilisateurs){
    this.utilisateursService.createUtilisateur(data);
  }

}
