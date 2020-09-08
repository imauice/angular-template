import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../core/menus';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  @Input() menus: Menu[];
  options = {autoHide: false, scrollbarMinSize: 100};

  constructor() {
  }

  ngOnInit(): void {
  }

}
