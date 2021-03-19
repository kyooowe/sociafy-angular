import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  activeMenu: string = 'News Feed';

  constructor() { }

  ngOnInit(): void {
  }

  sideBarValue(event) {
    this.activeMenu = event.target.id;
  }

}
