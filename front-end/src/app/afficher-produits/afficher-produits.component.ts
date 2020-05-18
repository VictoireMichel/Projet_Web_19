import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ProduitsService} from "../produit/produits.service";
import {MdbTableDirective} from "angular-bootstrap-md/";
import {ActivatedRoute, Router} from "@angular/router";
import {Produits} from '../produit/produits.interface';

@Component({
  selector: 'app-afficher-produits',
  templateUrl: './afficher-produits.component.html',
  styleUrls: ['./afficher-produits.component.scss']
})
export class AfficherProduitsComponent implements OnInit {

  produits: Produits[];

  search = { recherche: '' }


  constructor(private produitsService: ProduitsService, private router: Router) {
  }

    ngOnInit(): void {

    /*
      this.produitsService.getProduitsAll().subscribe(data=> {
        this.produits = data["data"];
      });

     */
    }

  onEnter(value) {

    this.search = value;

    this.produitsService.getProduits(this.search).subscribe(data => {
      this.produits = data["data"];
      console.log(JSON.stringify(data["data"]) + " data");
    });

    console.log(JSON.stringify(this.search) + " recherche");

    console.log(this.produits + " prod");


    //console.log(this.search.recherche + " rechercheValeur");
    //console.log(this.produits);

  }

}

