import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "./produits.service";




import {Router} from "@angular/router";
import {Produits} from './produits.interface';
import {isNull} from "util";



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {



  produits: Produits[];

  constructor(private produitsService: ProduitsService, private router: Router) {
  }

  ngOnInit(): void {
    this.produitsService.getProduits().subscribe((data: Produits[]) => {
      this.produits = data;
    });

  }

  goToAddProduits() {
    this.router.navigateByUrl('/ajout-produit');
  }

  deleteProduit(idProd) {
    this.produitsService.deleteProduit(idProd);
    var indexed = null;
    Object.keys(this.produits).forEach((e) => {
      if (this.produits[e].id == idProd){
        indexed = this.produits.indexOf(this.produits[e]);
      }
    });
    if (!isNull(indexed)){
      this.produits.splice(indexed, 1);
    }
  }

}
