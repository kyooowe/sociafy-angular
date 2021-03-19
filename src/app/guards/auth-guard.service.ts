import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private jwt: JwtHelperService) { }

    canActivate() {

        const token = localStorage.getItem("jwt");

        if (token && !this.jwt.isTokenExpired(token)) 
        {
            return true;
        } 
        else 
        {
            console.log(token)
            if(token == null) {
                
                this.router.navigate(["login"]);
                return false;
            }

            if(this.jwt.isTokenExpired(token)) {
                alert("Token has expired!")
                localStorage.removeItem("jwt");
                localStorage.removeItem("ao");
                this.router.navigate(["login"]);
                return false;
            }
        }

    }
}