
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
import { ConnexionPrivComponent } from './connexion-priv/connexion-priv.component';
import { ProduitComponent } from './produit/produit.component';
import {ProduitsService} from './produit/produits.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { CategoriesComponent } from './categories/categories.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';

import {CategoriesService} from './categories/categories.service';
import {FournisseursService} from './fournisseurs/fournisseurs.service';
import { AdminComponent } from './admin/admin.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';





const routes: Routes = [
  {path: '', component: HomeComponent }, // http://localhost:4200
  {path: 'news', component: NewsComponent}, // http://localhost:4200/news
  {path: 'contact', component: ContactComponent }, // http://localhost:4200/contact
  {path: 'connecter', component: ConnecterComponent}, // http://localhost:4200/connecter
  {path: 'connexion-Privé', component: ConnexionPrivComponent}, // http://localhost:4200/connexion-Privé
  {path: 'produits', component: ProduitComponent},
  {path: 'ajout-produit', component: AjoutProduitComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'modifier-produit/:id', component: ModifierProduitComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    HomeComponent,
    NewsComponent,
    ConnecterComponent,
    ConnexionPrivComponent,
    ProduitComponent,
    AjoutProduitComponent,
    CategoriesComponent,
    FournisseursComponent,
    AdminComponent,
    ModifierProduitComponent
  ],
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
    })
  ],
  providers: [
    ProduitsService,
    CategoriesService,
    FournisseursService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
