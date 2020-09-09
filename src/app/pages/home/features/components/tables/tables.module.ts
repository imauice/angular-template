import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TablesComponent} from './tables.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
  }
];

@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule
  ]
})
export class TablesModule {
}
