import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  authForm: FormGroup;
  email: string = "";
  password: string = "";
  isLoginFailed = false;
  loginSub: Subscription;
  isLoading = false;
  account: any;

  constructor(private api: ApiService, private router: Router, private elementRef: ElementRef) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F5F5F5';
  }

  ngOnDestroy() {
    if(this.loginSub !== undefined) {
      this.loginSub.unsubscribe();
    }
  }

  onSubmit = () => {

    this.isLoading = true;
    this.authForm.updateValueAndValidity({ onlySelf: true });
    this.loginSub = this.api.login(this.authForm.value).subscribe(response => {

      this.isLoginFailed = false; 
      localStorage.setItem("ao", JSON.stringify(response));
      setTimeout(() => {
        this.router.navigate(["admin"]);
        const data = (<any>response).token;
        localStorage.setItem("jwt", data.token);
        this.isLoading = false;
      }, 1500);

    }, error => {

      setTimeout(() => {
        this.authForm.enable();
        this.authForm.controls.password.setValue("");
        this.isLoginFailed = true;
        this.isLoading = false;
      }, 1500);

    })
  }
}
