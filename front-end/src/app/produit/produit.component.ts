import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ProduitsService} from "./produits.service";




import {Router} from "@angular/router";
import {Produits} from './produits.interface';
import {isNull} from "util";
import {MdbTableDirective} from "angular-bootstrap-md";



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

  }

  recherche(value: string) {
    this.produitsService.getProduits(value).subscribe(data => {
      this.produits = data["data"];

      console.log(JSON.stringify(data["data"]) + " data");
      console.log(this.produits + " prod");
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
