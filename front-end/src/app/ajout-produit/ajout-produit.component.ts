import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../produit/produits.service';
import {Produits} from "../produit/produits.interface";

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {

  produits: Produits = {
  id: null,
  nom: "",
  categorie: null,
  fournisseur: null,
  origine: "",
};

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
  }

  createProduit(data: Produits){
    this.produitsService.createProduits(data);
  }
}
