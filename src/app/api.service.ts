import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Account } from "./models/account.model";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class ApiService {

    url = "https://localhost:44360/api/";

    constructor(private http: HttpClient) { }

    login = (account: Account) => {
        const url = `${this.url}user/login`;
        return this.http.post(url, account);
    }
    
    get = (controller: string) => {
        const uri = `${this.url}${controller}`;
        return this.http.get(uri);
    }

}