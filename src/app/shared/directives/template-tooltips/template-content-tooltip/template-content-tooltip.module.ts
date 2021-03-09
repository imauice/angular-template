import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateContentTooltipComponent} from './template-content-tooltip.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {TemplateContentTooltipDirective} from './template-content-tooltip.directive';

@NgModule({
  declarations: [TemplateContentTooltipDirective, TemplateContentTooltipComponent],
  exports: [
    TemplateContentTooltipDirective
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class TemplateContentTooltipModule {
}
