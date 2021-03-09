import {ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {FormControl} from '@angular/forms';
import {TemplatePasswordFieldTooltipComponent} from './template-password-field-tooltip.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[templatePasswordFieldTooltip]'
})
export class TemplatePasswordFieldTooltipDirective implements OnInit, OnDestroy {
  @Input('templatePasswordFieldTooltip') passwordControl: FormControl;
  @Input() panelClass: string;
  @Input() tooltipWidth: number;
  private overlayRef: OverlayRef;
  private tooltipRef: ComponentRef<TemplatePasswordFieldTooltipComponent>;

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
        panelClass: ['template-tooltip-panel', this.panelClass]
      },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: -21.5,
          panelClass: ['template-tooltip-panel', this.panelClass]
        }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      width: this.tooltipWidth ? `${this.tooltipWidth}px` : this.elementRef.nativeElement.offsetWidth
    });

    this.passwordControl.valueChanges.subscribe(value => {
      this.validate(value);
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
        this.show();
      }
    });
  }

  @HostListener('focusin')
  focusIn(): void {
    if (!this.overlayRef.hasAttached()) {
      this.show();
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.mat-form-field-flex'),
        'box-shadow', '0px 3px 8px rgba(0, 0, 0, 0.149)', 1);
    }
  }

  @HostListener('focusout')
  focusOut(): void {
    this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.mat-form-field-flex'), 'box-shadow', 'none', 1);
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.mat-form-field-flex'), 'box-shadow', 'none', 1);
    this.overlayRef.detach();
  }

  show() {
    this.tooltipRef = this.overlayRef.attach(new ComponentPortal(TemplatePasswordFieldTooltipComponent));
    // @ts-ignore
    this.tooltipRef.instance.errors = this.passwordControl.errors;

  }

  validate(value) {
    let validationObject = {...this.passwordControl.errors};

    if (value && value.length < 8) {
      validationObject = {...validationObject, minLength: true};
    }

    if (value && !(new RegExp('[A-Z]').test(value))) {
      validationObject = {...validationObject, upperCaseLetter: true};
    }

    if (value && !(new RegExp('[a-z]').test(value))) {
      validationObject = {...validationObject, lowerCaseLetter: true};
    }

    if (value && !(new RegExp('[0-9]').test(value))) {
      validationObject = {...validationObject, numericDigit: true};
    }

    if (Object.keys(validationObject).length === 0) {
      this.passwordControl.setErrors(null);
    } else {
      this.passwordControl.setErrors(validationObject);
    }

  }
}
