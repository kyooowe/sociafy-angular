import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  accountObj: any;

  constructor(private route: Router, private jwt: JwtHelperService) { }

  ngOnInit(): void {

    this.accountObj = JSON.parse(localStorage.getItem("ao"));
    this.isUserAuthenticated();
  }

  isUserAuthenticated() {
    const token:string = localStorage.getItem("jwt");
    if(token && !this.jwt.isTokenExpired(token)) {
      return true;
    } else {
      localStorage.removeItem("jwt");
      localStorage.removeItem("ao");
      return false;
    }
  }

  logOut() {
    this.route.navigate(["/login"]);
    localStorage.removeItem("jwt");
    localStorage.removeItem("ao");
  }

}
