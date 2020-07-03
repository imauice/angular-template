import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../../core/menus';
import {Router} from '@angular/router';
import {Observable} from "rxjs";
import {ThemeService} from "../../../../core/services/theme.service";

@Component({
  selector: 'app-home-sidebar-options',
  templateUrl: './home-sidebar-options.component.html',
  styleUrls: ['./home-sidebar-options.component.scss']
})
export class HomeSidebarOptionsComponent implements OnInit {
  @Input() menus: Menu[];
  activeMenu = 1;
  activeSubmenu = 0;
  openSubmenu = false;
  isDarkTheme: Observable<boolean>;

  constructor(private router: Router, private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit(): void {
  }

  menuClick(index: number, route?: string) {
    this.openSubmenu = this.activeMenu === index ? !this.openSubmenu : true;
    this.activeSubmenu = this.activeMenu === index ? this.activeSubmenu : 0;
    this.activeMenu = index;
    if (route) {
      this.router.navigate([route]);
    }
  }

  submenuClick(index: number, route: string) {
    this.activeSubmenu = index;
    this.router.navigate([route]);
  }
}
