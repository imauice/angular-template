import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ThemeService} from '../../core/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  version = '1.0.0';
  isMobile = false;
  githubId = 'danicaliforrnia';
  name = 'Daniel Stefanelli';
  menus = [
    {id: 1, name: 'Dashboard', icon: ''},
    {id: 2, name: 'menu 2', icon: ''},
    {id: 3, name: 'menu 3', icon: ''},
    {id: 4, name: 'menu 4', ion: ''}
  ];
  isDarkTheme: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              private themeService: ThemeService) {
    this.getMenus();
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

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
