import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class ContactService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'http://localhost:3000';

  getContact(data) {
    console.log(data);
    return this
      .http
      .post(`${this.url}/v1/api/utilisateurs/email`, data)

  }
}
