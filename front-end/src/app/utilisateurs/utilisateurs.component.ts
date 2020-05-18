import { Component, OnInit } from '@angular/core';
import {UtilisateursService} from "./utilisateurs.service";
import {Router} from "@angular/router";
import {Utilisateurs} from './utilisateurs.interface';
import {isNull} from "util";


@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  utilisateurs: Utilisateurs[];

  constructor(private utilisateursService: UtilisateursService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateursService.getUtilisateurs().subscribe((data: Utilisateurs[]) => {
      this.utilisateurs = data["data"];
    });

  }

  goToAddUtilisateurs() {
    this.router.navigateByUrl('/ajout-utilisateur');
  }

  deleteUtilisateur(idUser) {
    this.utilisateursService.deleteUtilisateur(idUser);
    var indexed = null;
    Object.keys(this.utilisateurs).forEach((e) => {
      if (this.utilisateurs[e].id == idUser){
        indexed = this.utilisateurs.indexOf(this.utilisateurs[e]);
      }
    });
    if (!isNull(indexed)){
      this.utilisateurs.splice(indexed, 1);
    }
  }

}
