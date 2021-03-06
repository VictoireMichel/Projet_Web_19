import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class ContactService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'https://idlunch.wt1-2.ephec-ti.be:3000';

  getContact(data) {
    console.log(data);
    return this
      .http
      .post(`${this.url}/v1/api/utilisateurs/email`, data)

  }
}
