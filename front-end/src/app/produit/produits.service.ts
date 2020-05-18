import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'https://idlunch.wt1-2.ephec-ti.be:3000';

  getProduits(data) {
    return this
      .http
      .get(`${this.url}/v1/api/produits`, data);

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
      .patch(`${this.url}/v1/api/produits?id=` + idProd, data).subscribe(res => {console.log(res);
      })
  }

}
