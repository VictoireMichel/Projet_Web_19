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
      .get(`${this.url}/v1/api/produits`);
  }

  createProduits(data) {
    this.http.post(`${this.url}/v1/api/produits`, data)
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/ajout-produit');
        },
        err => {
          console.log('Error occured:' , err);

        }
      );
  }


  deleteProduit(idProd) {
    return this
      .http
      .delete(`${this.url}/v1/api/produits?id=` + idProd).subscribe(res => {console.log(res)})
  }

  modifierProduit(idProd, data){
    return this
      .http
      .put(`${this.url}/v1/api/produits?id=` + idProd, data).subscribe(res => {console.log(res);
      })
  }


  //a revoir vers quel api ?? car pas dynamique pour l'instant
  getProduitRecherche(prod) {
    return this
      .http
      .get(`${this.url}/v1/api/produits?` + prod).subscribe(res => {console.log(res)});
  }


}
