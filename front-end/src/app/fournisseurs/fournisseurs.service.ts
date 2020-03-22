import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable()
export class FournisseursService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'http://localhost:3000';

  getFournisseurs() {
    return this
      .http
      .get(`${this.url}/api/fournisseurs`);
  }

}
