import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsComponent} from './components.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'buttons',
        loadChildren: () => import('./buttons/buttons.module.js').then(m => m.ButtonsModule)
      },
      {
        path: 'sliders',
        loadChildren: () => import('./sliders/sliders.module.js').then(m => m.SlidersModule)
      }
    ]
  }
];

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FlexModule
  ]
})
export class ComponentsModule {
}
