import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavMenuComponent} from './sidenav-menu.component';


@NgModule({
  declarations: [SidenavMenuComponent],
  exports: [
    SidenavMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SidenavMenuModule {
}
