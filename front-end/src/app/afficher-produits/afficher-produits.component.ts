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

  @ViewChild(MdbTableDirective, {static: true}) mdbTable:
    MdbTableDirective;
  elements: any = [];
  headElements = ['Id', 'Nom',
    'Catégorie', 'Fournisseur', 'Origine'];
  searchText: string = '';
  previous: string;

  constructor(private produitsService: ProduitsService, private router: Router) {
  }

  @HostListener('input') oninput() {this.searchItems();}

    ngOnInit()
  :
    void {
      this.produitsService.getProduits().subscribe((data) => {
        this.elements = data;
        this.mdbTable.setDataSource(this.elements);
        this.previous = this.mdbTable.getDataSource();
      });

  }

    searchItems()
    {
      const
        prev = this.mdbTable.getDataSource();
      if (!this.searchText) {
        this.mdbTable.setDataSource(this.previous);
        this.elements =
          this.mdbTable.getDataSource();
      }
      if (this.searchText) {
        this.elements =
          this.mdbTable.searchLocalDataByMultipleFields(this.searchText, [
            'nom', 'categorie', 'fournisseur', 'origine']);
        this.mdbTable.setDataSource(prev);
      }
    }

  }

