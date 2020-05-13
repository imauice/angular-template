import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ThemeService} from '../../../core/services/theme.service';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss']
})
export class HomeToolbarComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() signOut = new EventEmitter<void>();
  @Input() githubId: string;
  @Input() name: string;
  @Input() isMobile: boolean;
  isDarkTheme: Observable<boolean>;
  color = 'primary';

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    this.themeService.isDarkTheme.subscribe(value => {
      this.color = value ? 'none' : 'primary';
    });
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  onToggle() {
    this.toggle.emit();
  }

  onSignOut() {
    this.signOut.emit();
  }

}
