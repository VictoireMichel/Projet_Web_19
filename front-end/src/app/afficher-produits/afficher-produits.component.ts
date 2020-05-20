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


  constructor(private produitsService: ProduitsService, private router: Router) {
  }

    ngOnInit(): void {

    }

  onEnter(value) {

    this.produitsService.getProduits(value).subscribe(data => {
      this.produits = data["data"];

      console.log(JSON.stringify(data["data"]) + " data");
      console.log(this.produits + " prod");
    });
  }

}

