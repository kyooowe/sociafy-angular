import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isVisible: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(route => {
      if(this.router.url == '/login') {
        this.isVisible = false;
      }
      else {
        this.isVisible = true;
      }
    })
  }
}
