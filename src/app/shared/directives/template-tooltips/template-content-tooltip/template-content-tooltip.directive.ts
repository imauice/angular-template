import {ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {TemplateContentTooltipComponent} from './template-content-tooltip.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[templateContentTooltip]'
})
export class TemplateContentTooltipDirective implements OnInit, OnDestroy {
  @Input('templateContentTooltip') content: any;
  @Input() panelClass: string;
  @Input() tooltipWidth: number;
  private overlayRef: OverlayRef;
  private tooltipRef: ComponentRef<TemplateContentTooltipComponent>;

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -8,
        panelClass: ['template-tooltip-panel', this.panelClass]
      },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 8,
          panelClass: ['template-tooltip-panel', this.panelClass]
        }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      width: this.tooltipWidth ? `${this.tooltipWidth}px` : this.elementRef.nativeElement.offsetWidth
    });
  }

  @HostListener('mouseover')
  mouseOver(): void {
    if (!this.overlayRef.hasAttached()) {
      this.show();
    }
  }

  @HostListener('mouseout')
  mouseOut(): void {
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    this.overlayRef.detach();
  }

  show() {
    this.tooltipRef = this.overlayRef.attach(new ComponentPortal(TemplateContentTooltipComponent));
    // @ts-ignore
    this.tooltipRef.instance.content = this.content;
  }

}
