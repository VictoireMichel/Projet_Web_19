import { Component, OnInit } from '@angular/core';
import {Categories} from "../categories/categories.interface";
import {CategoriesService} from "../categories/categories.service";

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss']
})
export class AjoutCategorieComponent implements OnInit {

  categories: Categories = {
    id: null,
    nom: "",
    details:"",
  };

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  createCategorie(data: Categories){
    this.categoriesService.createCategorie(data);
  }

}
