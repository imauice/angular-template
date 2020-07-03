import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ThemeService} from '../../core/services/theme.service';
import {menus} from '../../core/menus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  version = '1.0.0';
  isMobile = false;
  name = 'Daniel Stefanelli';
  menus = menus;
  isDarkTheme: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              private themeService: ThemeService) {
    this.getMenus();
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
        }
      });
  }

  getMenus() {

  }

  signOut() {

  }
}
