import { Component, OnInit } from '@angular/core';
import {Fournisseurs} from "./fournisseurs.interface";
import {FournisseursService} from "./fournisseurs.service";
import {Router} from "@angular/router";

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

}
