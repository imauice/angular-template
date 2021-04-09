import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipsComponent} from './tooltips.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../../../../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TemplatePasswordFieldTooltipModule} from '../../../../../shared/directives/template-tooltips/template-password-field-tooltip/template-password-field-tooltip.module';
import {TemplateContentTooltipModule} from "../../../../../shared/directives/template-tooltips/template-content-tooltip/template-content-tooltip.module";

const routes: Routes = [
  {
    path: '',
    component: TooltipsComponent,
  }
];

@NgModule({
  declarations: [TooltipsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    SharedModule,
    ReactiveFormsModule,
    TemplatePasswordFieldTooltipModule,
    TemplateContentTooltipModule
  ]
})
export class TooltipsModule {
}
