import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class UtilisateursService {
  constructor(private http: HttpClient, private router: Router) {
  }


  url = 'https://idlunch.wt1-2.ephec-ti.be:3000';

  getUtilisateurs() {
    return this
      .http
      .get(`${this.url}/v1/api/utilisateurs`);
  }

  createUtilisateur(data) {
    this.http.post(`${this.url}/v1/api/utilisateurs`, data)
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/ajout-utilisateur');
        },
        err => {
          console.log('Error occured:' , err);

        }
      );
  }

  modifierUtilisateur(idUser, data){
    return this
      .http
      .put(`${this.url}/v1/api/utilisateurs?id=` + idUser, data).subscribe(res => {console.log(res);
      })
  }

  deleteUtilisateur(idUser) {
    return this
      .http
      .delete(`${this.url}/v1/api/utilisateurs?id=` + idUser).subscribe(res => {console.log(res)})
  }

}
