import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxChartsComponent} from './ngx-charts.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: NgxChartsComponent,
  }
];

@NgModule({
  declarations: [NgxChartsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule
  ]
})
export class NgxChartsModule {
}
