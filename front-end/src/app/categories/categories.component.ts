import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "./categories.service";
import {Router} from "@angular/router";
import {Categories} from './categories.interface';
import {isNull} from "util";



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[];

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data: Categories[]) => {
      this.categories = data;
    });

  }

  goToAddCategories() {
    this.router.navigateByUrl('/ajout-categorie');
  }

  deleteCategorie(idProd) {
    this.categoriesService.deleteCategorie(idProd);
    /*
    var indexed = null;
    Object.keys(this.categories).forEach((e) => {
      if (this.categories[e].id == idProd){
        indexed = this.categories.indexOf(this.categories[e]);
      }
    });
    if (!isNull(indexed)){
      this.categories.splice(indexed, 1);
    }*/
  }

}
