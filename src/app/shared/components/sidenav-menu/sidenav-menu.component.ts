import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {
  @Input() menus = [];
  activeMenu = 1;
  activeSubmenu = -1;
  time = new Date();
  date = new Date();

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  onMenuSelected(id: number) {
    this.activeMenu = id;
  }

  onSubmenuSelected(id: number) {
    this.activeSubmenu = id;
    console.log(this.activeMenu);
    console.log(this.activeSubmenu);
  }

  public trackByFn(index: number, menu) {
    return menu.id;
  }
}
