import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../produit/produits.service';
import {Produits} from "../produit/produits.interface";
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss']
})
export class ModifierProduitComponent implements OnInit {


 leProduit: Produits = {
   id: null,
   nom: "",
   categorie: null,
   fournisseur: null,
   origine: "",
 };
 id: string;



  constructor(private produitsService: ProduitsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
   this.produitsService.getProduits().subscribe((data) => {
      Object.keys(data).forEach((e) => {
        if (data[e].id == this.id){
          this.leProduit = data[e];
        }
      });
    });
  }

  modifierProduit(idProd){
    this.produitsService.modifierProduit(idProd, this.leProduit);
  }

}
