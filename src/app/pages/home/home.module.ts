import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {FlexModule} from '@angular/flex-layout';
import {HomeToolbarComponent} from './home-components/home-toolbar/home-toolbar.component';
import {HomeFooterComponent} from './home-components/home-footer/home-footer.component';
import {AvatarModule} from 'ngx-avatar';
import {HomeSidebarModule} from './home-components/home-sidebar/home-sidebar.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  }
];

@NgModule({
  declarations: [HomeComponent, HomeToolbarComponent, HomeFooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AvatarModule,
    HomeSidebarModule,
    FlexModule
  ]
})
export class HomeModule {
}
