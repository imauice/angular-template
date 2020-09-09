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
  name = 'Daniel Stefanelli';
  menus = menus;
  isDarkTheme: Observable<boolean>;
  options = {autoHide: false, scrollbarMinSize: 100};

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

export const menus: Menu[] = [
  {
    id: 1, name: 'Inicio', icon: 'home', route: '/'
  },
  {
    id: 2, name: 'Componentes',
    submenus: [
      {id: 1, name: 'Botones', icon: 'add_circle', route: '/home/components/buttons'},
      {id: 2, name: 'Sliders', icon: 'linear_scale', route: '/home/components/sliders'},
      {id: 3, name: 'Switches y tabs', icon: 'toggle_on', route: '/home/components/switches-&-tabs'},
      {id: 4, name: 'Modals', icon: 'call_to_action', route: '/home/components/modals'},
      {id: 5, name: 'Notifications', icon: 'notifications', route: '/home/components/notifications'},
      {id: 6, name: 'Tables', icon: 'tables', route: '/home/components/tables'},
    ]
  },
  {
    id: 3, name: 'Formularios', icon: 'edit'
  },
  {
    id: 4, name: 'Charts', icon: 'analytics'
  }
];

export interface Menu {
  id: number;
  name: string;
  icon?: string;
  route?: string;
  submenus?: Submenu[];
}

export interface Submenu {
  id: number;
  route: string;
  name: string;
  icon?: string;
}
