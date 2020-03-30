import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'http://localhost:3000';

  getCategories() {
    return this
      .http
      .get(`${this.url}/v1/api/categories`);
  }

}
