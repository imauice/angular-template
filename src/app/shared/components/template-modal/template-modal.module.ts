import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import {TemplateModalComponent} from './template-modal.component';
import {ModalService} from './modal.service';

@NgModule({
  declarations: [TemplateModalComponent],
  exports: [
    MatDialogModule,
    TemplateModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [
    ModalService
  ]
})
export class TemplateModalModule {
}
