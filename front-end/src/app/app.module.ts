import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes,Router} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanniereComponent } from './banniere/banniere.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { EnregistrerComponent } from './enregistrer/enregistrer.component';





const routes: Routes = [
  {path: '', component: HomeComponent }, // http://localhost:4200
  {path: 'news', component: NewsComponent}, // http://localhost:4200/news
  {path: 'contact', component: ContactComponent }, // http://localhost:4200/contact
  {path: 'connecter', component: ConnecterComponent}, // http://localhost:4200/connecter
  {path: 'enregistrer', component: EnregistrerComponent}, // http://localhost:4200/enregistrer
];


@NgModule({
  declarations: [
    AppComponent,
    BanniereComponent,
    NavBarComponent,
    ContactComponent,
    HomeComponent,
    NewsComponent,
    ConnecterComponent,
    EnregistrerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
