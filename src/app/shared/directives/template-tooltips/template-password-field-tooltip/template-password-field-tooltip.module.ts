import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplatePasswordFieldTooltipComponent} from './template-password-field-tooltip.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {TemplatePasswordFieldTooltipDirective} from './template-password-field-tooltip.directive';

@NgModule({
  declarations: [TemplatePasswordFieldTooltipDirective, TemplatePasswordFieldTooltipComponent],
  exports: [
    TemplatePasswordFieldTooltipDirective
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class TemplatePasswordFieldTooltipModule {
}
