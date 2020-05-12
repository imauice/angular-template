import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeToolbarComponent} from './home-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [HomeToolbarComponent],
  exports: [
    HomeToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule
  ]
})
export class HomeToolbarModule {
}
