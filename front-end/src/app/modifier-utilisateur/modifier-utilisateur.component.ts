import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import {UtilisateursService} from '../utilisateurs/utilisateurs.service';
import {Utilisateurs} from "../utilisateurs/utilisateurs.interface";
import {Categories} from "../categories/categories.interface";
import {CategoriesService} from "../categories/categories.service";


@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.scss']
})
export class ModifierUtilisateurComponent implements OnInit {

  leUtilisateur: Utilisateurs = {
    id: null,
    nom:"",
    prenom:"",
    genre: "",
    email:"",
    mdp: "",
    adresse:"",
    telephone:"",
  };
  id: string;

  constructor(private utilisateursService: UtilisateursService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.utilisateursService.getUtilisateurs().subscribe((data) => {
      Object.keys(data["data"]).forEach((e) => {
        if (data["data"][e].id == this.id){
          this.leUtilisateur = data["data"][e];
        }
      });
    });
  }

  modifierUtilisateur(idUser){
    this.utilisateursService.modifierUtilisateur(idUser, this.leUtilisateur);
  }


}
