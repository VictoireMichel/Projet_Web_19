import { Component, OnInit } from '@angular/core';
import {Fournisseurs} from "./fournisseurs.interface";
import {FournisseursService} from "./fournisseurs.service";
import {Router} from "@angular/router";
import {isNull} from "util";

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent implements OnInit {

  fournisseurs: Fournisseurs[];

  constructor(private fournisseursService: FournisseursService, private router: Router) { }

  ngOnInit(): void {
    this.fournisseursService.getFournisseurs().subscribe((data: Fournisseurs[]) => {this.fournisseurs = data});
  }

  goToAddFournisseurs() {
    this.router.navigateByUrl('/ajout-fournisseur');
  }

  deleteFourn(idFourn) {

    this.fournisseursService.deleteFourn(idFourn);
    var indexed = null;
    Object.keys(this.fournisseurs).forEach((e) => {
      if (this.fournisseurs[e].id == idFourn){
        indexed = this.fournisseurs.indexOf(this.fournisseurs[e]);
      }
    });
    if (!isNull(indexed)){
      this.fournisseurs.splice(indexed, 1);
    }
  }
}
