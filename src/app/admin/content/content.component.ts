import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  accountObj: any;
  activeTab: string = 'Create Post';
  url = [];

  constructor() { }

  ngOnInit(): void {

    this.accountObj = JSON.parse(localStorage.getItem("ao"));
    console.log(this.accountObj.fullName);

  }

  getActiveTab = (tabName: string) => {
    this.activeTab = tabName;
  }

  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 25)+"px";
  }

  onSelectFile(event) {
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any) => {
        this.url.push(e.target.result)
      }
    }
  }
}
