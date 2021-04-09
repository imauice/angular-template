import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {
  hidePassword = true;
  control = new FormControl(null, [Validators.required]);

  constructor() {
  }

  ngOnInit(): void {
  }

}
