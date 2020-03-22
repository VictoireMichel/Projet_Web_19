import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "./categories.service";
import {Router} from "@angular/router";
import {Categories} from './categories.interface';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[];

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data: Categories[]) => {this.categories = data});
  }

}
