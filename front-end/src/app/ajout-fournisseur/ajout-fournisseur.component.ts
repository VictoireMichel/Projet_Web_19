import { Component, OnInit } from '@angular/core';
import {Fournisseurs} from "../fournisseurs/fournisseurs.interface";
import {Categories} from '../categories/categories.interface';
import {CategoriesService} from "../categories/categories.service";
import {FournisseursService} from "../fournisseurs/fournisseurs.service";


@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.scss']
})
export class AjoutFournisseurComponent implements OnInit {

  fournisseurs: Fournisseurs = {
    id: null,
    nom: "",
    adresse:"",
    categorie: null,

  };

  categories: Categories[];

  constructor(private fournisseursService: FournisseursService,private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data: Categories[]) => {this.categories = data});

  }

  createFournisseur(data: Fournisseurs){
    this.fournisseursService.createProduits(data);
  }
}
