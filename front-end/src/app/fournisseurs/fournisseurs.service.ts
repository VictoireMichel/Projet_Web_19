import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class FournisseursService {
  constructor(private http: HttpClient, private router: Router) {
  }


  url = 'http://localhost:3000';

  getFournisseurs() {
    return this
      .http
      .get(`${this.url}/v1/api/fournisseurs`);
  }

  createFournisseur(data) {
    this.http.post(`${this.url}/v1/api/fournisseurs`, data)
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/ajout-fournisseur');
        },
        err => {
          console.log('Error occured:' , err);

        }
      );
  }

  modifierFournisseur(idFourn, data){
    return this
      .http
      .put(`${this.url}/v1/api/fournisseurs?id=` + idFourn, data).subscribe(res => {console.log(res);
      })
  }

  deleteFourn(idFourn) {
    return this
      .http
      .delete(`${this.url}/v1/api/fournisseurs?id=` + idFourn).subscribe(res => {console.log(res)})
  }

}
