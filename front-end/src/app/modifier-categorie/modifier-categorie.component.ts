import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import {CategoriesService} from '../categories/categories.service';
import {Categories} from "../categories/categories.interface";

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.scss']
})
export class ModifierCategorieComponent implements OnInit {


  laCategorie: Categories = {
    id: null,
    nom: "",
    details:"",
  };
  id: string;

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.categoriesService.getCategories().subscribe((data) => {
      Object.keys(data["data"]).forEach((e) => {
        if (data["data"][e].id == this.id){
          this.laCategorie = data["data"][e];
        }
      });
    });
  }

  modifierCategorie(idCat){
    this.categoriesService.modifierCategorie(idCat, this.laCategorie);
  }

}
