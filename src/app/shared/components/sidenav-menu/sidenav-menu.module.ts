import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavMenuComponent} from './sidenav-menu.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [SidenavMenuComponent],
  exports: [
    SidenavMenuComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class SidenavMenuModule {
}
