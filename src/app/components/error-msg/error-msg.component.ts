import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss'],
})
export class ErrorMsgComponent implements OnInit {
  @Input() msg: string;
  @Input() field: FormControl;
  @Input() error: string;

  constructor() {}

  ngOnInit() {}

  showError() {
    if (this.field.touched && this.field.errors?.[this.error]) {
      return true;
    }
    return false;
  }
}
