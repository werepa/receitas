import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./login-wrapper.component.scss'],
})
export class LoginWrapperComponent implements OnInit {
  @Input() msg: string;

  constructor() {}

  ngOnInit() {}
}
