import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeSidebarComponent} from './home-sidebar.component';
import {HomeSidebarHeaderComponent} from './home-sidebar-header/home-sidebar-header.component';
import {HomeSidebarOptionsComponent} from './home-sidebar-options/home-sidebar-options.component';
import {MatDividerModule} from "@angular/material/divider";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [HomeSidebarComponent, HomeSidebarHeaderComponent, HomeSidebarOptionsComponent],
  exports: [
    HomeSidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    FlexModule
  ]
})
export class HomeSidebarModule {
}
