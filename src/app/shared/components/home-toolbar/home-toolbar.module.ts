import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeToolbarComponent} from './home-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import {AvatarModule} from 'ngx-avatar';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [HomeToolbarComponent],
  exports: [
    HomeToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    FlexModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule,
    AvatarModule,
    MatTooltipModule
  ]
})
export class HomeToolbarModule {
}
