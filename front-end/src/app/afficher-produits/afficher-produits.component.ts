import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ProduitsService} from "../produit/produits.service";
import {MdbTableDirective} from "angular-bootstrap-md/";
import {Router} from "@angular/router";
import {Produits} from '../produit/produits.interface';

@Component({
  selector: 'app-afficher-produits',
  templateUrl: './afficher-produits.component.html',
  styleUrls: ['./afficher-produits.component.scss']
})
export class AfficherProduitsComponent implements OnInit {

  produits: Produits[];

  recherche: string = '';


  constructor(private produitsService: ProduitsService, private router: Router) {
  }

    ngOnInit(): void {}

  onEnter(value: string) {
    this.recherche = value;
    this.produitsService.getProduits(this.recherche).subscribe(
      res => {
        //this.produits = res;
        console.log(res + " res");
      },
      err => {
        console.log('Error occured:' , err);
      }
    );
    console.log(this.recherche);
    //console.log(this.produits);

  }

  }

