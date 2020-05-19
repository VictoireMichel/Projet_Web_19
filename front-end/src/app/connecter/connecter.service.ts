import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class ConnecterService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'https://idlunch.wt1-2.ephec-ti.be:3000';

  getConnexion(data) {
    return this
      .http
      .post(`${this.url}/v1/api/utilisateurs/login`, data).subscribe(
        res=>{
        console.log(res);
      }
        ,
        err => {
          console.log('Error occured:' , err);

        });

  }

}
