import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "./produits.service";




import {Router} from "@angular/router";
import {Produits} from './produits.interface';



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
    Object.keys(this.produits).forEach((e) => {
      if (this.produits[e].id == idProd){
        this.produits.splice(this.produits.indexOf(this.produits[e]), 1);
      }
    });

  }

}
