import { Component, OnInit } from '@angular/core';
import {UtilisateursService} from "./utilisateurs.service";
import {Router} from "@angular/router";
import {Utilisateurs} from './utilisateurs.interface';


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
      this.utilisateurs = data;
    });

  }

  goToAddUtilisateurs() {
    this.router.navigateByUrl('/ajout-utilisateur');
  }

  deleteUtilisateur(idUser) {
    this.utilisateursService.deleteUtilisateur(idUser);
    window.location.reload();
  }

}
