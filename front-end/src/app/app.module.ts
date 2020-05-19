
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { ConnecterService } from './connecter/connecter.service';

import { ProduitComponent } from './produit/produit.component';
import {ProduitsService} from './produit/produits.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { CategoriesComponent } from './categories/categories.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';

import {CategoriesService} from './categories/categories.service';
import {FournisseursService} from './fournisseurs/fournisseurs.service';
import { AdminComponent } from './admin/admin.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { AjoutFournisseurComponent } from './ajout-fournisseur/ajout-fournisseur.component';
import { ModifierFournisseurComponent } from './modifier-fournisseur/modifier-fournisseur.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import {UtilisateursService} from "./utilisateurs/utilisateurs.service";
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { AfficherProduitsComponent } from './afficher-produits/afficher-produits.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { InscriptionComponent } from './inscription/inscription.component';







const routes: Routes = [
  {path: '', component: HomeComponent }, // http://localhost:4200
  {path: 'news', component: NewsComponent}, // http://localhost:4200/news
  {path: 'contact', component: ContactComponent }, // http://localhost:4200/contact
  {path: 'connecter', component: ConnecterComponent}, // http://localhost:4200/connecter
  {path: 'produits', component: ProduitComponent},
  {path: 'ajout-produit', component: AjoutProduitComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'modifier-produit/:id', component: ModifierProduitComponent },
  {path: 'ajout-fournisseur', component: AjoutFournisseurComponent },
  {path: 'fournisseurs', component: FournisseursComponent },
  {path: 'modifier-fournisseur/:id', component: ModifierFournisseurComponent },
  {path: 'ajout-categorie', component: AjoutCategorieComponent },
  {path: 'categories', component: CategoriesComponent },
  {path: 'modifier-categorie/:id', component: ModifierCategorieComponent },
  {path: 'ajout-utilisateur', component: AjoutUtilisateurComponent },
  {path: 'utilisateurs', component: UtilisateursComponent },
  {path: 'modifier-utilisateur/:id', component: ModifierUtilisateurComponent },
  {path: 'statistiques', component: StatistiquesComponent },
  {path: 'inscription', component: InscriptionComponent},
  {path: 'afficher-produits', component: AfficherProduitsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    HomeComponent,
    NewsComponent,
    ConnecterComponent,
    ProduitComponent,
    AjoutProduitComponent,
    CategoriesComponent,
    FournisseursComponent,
    AdminComponent,
    ModifierProduitComponent,
    AjoutFournisseurComponent,
    ModifierFournisseurComponent,
    AjoutCategorieComponent,
    ModifierCategorieComponent,
    UtilisateursComponent,
    AjoutUtilisateurComponent,
    ModifierUtilisateurComponent,
    AfficherProduitsComponent,
    StatistiquesComponent,
    InscriptionComponent,
  ],
    schemas: [ NO_ERRORS_SCHEMA],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MDBBootstrapModule.forRoot(),
        FormsModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
        }),
        ReactiveFormsModule
    ],
  providers: [
    ProduitsService,
    CategoriesService,
    FournisseursService,
    UtilisateursService,
    ConnecterService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
