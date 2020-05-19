import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../produit/produits.service';
import {Produits} from "../produit/produits.interface";
import {CategoriesService} from "../categories/categories.service";
import {Categories} from '../categories/categories.interface';
import {FournisseursService} from "../fournisseurs/fournisseurs.service";
import {Fournisseurs} from '../fournisseurs/fournisseurs.interface';


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

  categories: Categories[];
  fournisseurs: Fournisseurs[];

  constructor(private produitsService: ProduitsService,private categoriesService: CategoriesService, private fournisseursService: FournisseursService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data: Categories[]) => {this.categories = data["data"]});
    this.fournisseursService.getFournisseurs().subscribe((data: Fournisseurs[]) => {this.fournisseurs = data["data"]});
  }

  createProduit(data: Produits){
    this.produitsService.createProduits(data);
  }

}
