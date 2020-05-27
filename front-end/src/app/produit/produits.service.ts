import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {optionsFactory} from "angular-confirmation-popover/confirmation-popover.module";


@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  constructor(private http: HttpClient, private router: Router) {
  }


  url = 'http://localhost:3000';

  getProduits(data) {
    return this
      .http
      .get(`${this.url}/v1/api/produits/` + data);

  }

 getProduitsAll(){
  return this
    .http
    .get(`${this.url}/v1/api/produits/recherche/all`);
}

  createProduits(data) {
    this.http.post(`${this.url}/v1/api/produits`, data)
      .subscribe(
        res => {
          console.log(res['data']);

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
      .put(`${this.url}/v1/api/produits?id=` + idProd, data).subscribe(res => {console.log(res);})
  }

}
