import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ProduitsService} from "./produits.service";
import {MdbTableDirective} from "angular-bootstrap-md/";



import {Router} from "@angular/router";
import {Produits} from './produits.interface';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {



  produits: Produits[];
  rechercheValue: string = '';

  @ViewChild(MdbTableDirective, { static: true }) mdbTable:
    MdbTableDirective; elements: any = []; headElements = ['Id', 'Nom',
    'Catégorie', 'Fournisseur', 'Origine']; searchText: string = ''; previous: string;



  constructor(private produitsService: ProduitsService, private router: Router) {
  }
  @HostListener('input') oninput() { this.searchItems();
  }
  ngOnInit(): void {
    this.produitsService.getProduits().subscribe((data) => {
      this.elements = data;
      this.mdbTable.setDataSource(this.elements);
      this.previous = this.mdbTable.getDataSource();
    });

  }
  searchItems() { const
    prev = this.mdbTable.getDataSource(); if (!this.searchText) {
    this.mdbTable.setDataSource(this.previous); this.elements =
      this.mdbTable.getDataSource(); } if (this.searchText) { this.elements =
    this.mdbTable.searchLocalDataByMultipleFields(this.searchText, [
      'nom', 'categorie', 'fournisseur', 'origine']); this.mdbTable.setDataSource(prev); }
  }





  goToAddProduits() {
    this.router.navigateByUrl('/ajout-produit');
  }

  deleteProduit(idProd) {
    this.produitsService.deleteProduit(idProd);
    window.location.reload();
  }



  //utilisé a partir de produit.component.html
  onKey(value: string) {
    this.rechercheValue = value;
  }
  produitRecherche() {
    this.produitsService.getProduitRecherche(this.rechercheValue);
  }
}
