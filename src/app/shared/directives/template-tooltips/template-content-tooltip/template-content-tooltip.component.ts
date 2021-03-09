import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template-content-tooltip',
  templateUrl: './template-content-tooltip.component.html',
  styleUrls: ['./template-content-tooltip.component.scss'],
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({opacity: 0}),
        animate(300, style({opacity: 1})),
      ]),
      transition(':leave', [
        animate(300, style({opacity: 0})),
      ]),
    ]),
  ]
})
export class TemplateContentTooltipComponent implements OnInit {
  @Input() content: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
