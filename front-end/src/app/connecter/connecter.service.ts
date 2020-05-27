import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class ConnecterService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'http://localhost:3000';

  getConnexion(data) {
    return this
      .http
      .post(`${this.url}/v1/api/utilisateurs/login`, data)
  }

  getLogout() {
    return this
      .http
      .get(`${this.url}/v1/api/utilisateurs/logout`).subscribe(res => console.log(res));
  }

}
