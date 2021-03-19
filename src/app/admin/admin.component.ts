import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {

  userData: any = [];
  

  constructor(private api: ApiService, private jwt: JwtHelperService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F5F5F5';
  }

  fetchData = () => {
    this.api.get('user/get').subscribe(data => {
      this.userData = data;
    }, error => {
      console.log(error)
    })
  }
  
}
