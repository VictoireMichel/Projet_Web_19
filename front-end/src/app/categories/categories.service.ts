import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'https://idlunch.wt1-2.ephec-ti.be:3000';

  getCategories() {
    return this
      .http
      .get(`${this.url}/v1/api/categories`);
  }

  createCategorie(data) {
    this.http.post(`${this.url}/v1/api/categories`, data)
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/ajout-categorie');
        },
        err => {
          console.log('Error occured:' , err);

        }
      );
  }

  modifierCategorie(idCat, data){
    return this
      .http
      .put(`${this.url}/v1/api/categories?id=` + idCat, data).subscribe(res => {console.log(res);
      })
  }

  deleteCategorie(idCat) {
    return this
      .http
      .delete(`${this.url}/v1/api/categories?id=` + idCat).subscribe(res => {console.log(res)})
  }
}
