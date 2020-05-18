import { Component, OnInit } from '@angular/core';
import {Fournisseurs} from "../fournisseurs/fournisseurs.interface";
import {FournisseursService} from '../fournisseurs/fournisseurs.service';
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import {ProduitsService} from "../produit/produits.service";

@Component({
  selector: 'app-modifier-fournisseur',
  templateUrl: './modifier-fournisseur.component.html',
  styleUrls: ['./modifier-fournisseur.component.scss']
})
export class ModifierFournisseurComponent implements OnInit {

  leFournisseur: Fournisseurs = {
    id: null,
    nom: "",
    adresse:"",
    categorie: null,
  };
  id: string;

  constructor(private fournisseursService: FournisseursService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fournisseursService.getFournisseurs().subscribe((data) => {
      Object.keys(data["data"]).forEach((e) => {
        if (data["data"][e].id == this.id){
          this.leFournisseur = data["data"][e];
        }
      });
    });
  }

  modifierFournisseur(idFourn){
    this.fournisseursService.modifierFournisseur(idFourn, this.leFournisseur);
  }

}
