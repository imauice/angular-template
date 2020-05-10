import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ThemeService} from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EE-template';
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
