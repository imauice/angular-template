import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[templateHeaderRow]'
})
export class TemplateHeaderRowDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#F4F4F4');
  }

}
