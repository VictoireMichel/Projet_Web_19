import { Component, OnInit } from '@angular/core';
import {ConnecterService} from "../connecter/connecter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private connecterService: ConnecterService, private router: Router) { }

  ngOnInit(): void {
  }

  getLogout(){
    this.connecterService.getLogout();
    this.router.navigateByUrl('/');
  }

}
