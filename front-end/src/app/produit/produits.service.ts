import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable()
export class ProduitsService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'http://localhost:3000';

  getProduits() {
    return this
      .http
      .get(`${this.url}/produits`);
  }
  createProduits(data) {
    this.http.post(`${this.url}/produits`, data)
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/produits');
        },
        err => {
          console.log('Error occured:' , err);

        }
      );
  }
}
