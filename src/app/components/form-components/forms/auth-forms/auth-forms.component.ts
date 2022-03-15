import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-forms',
  templateUrl: './auth-forms.component.html',
  styleUrls: ['./auth-forms.component.scss']
})
export class AuthFormsComponent implements OnInit {

  constructor() { }
  prepareRoute(outlet:RouterOutlet){}
  ngOnInit(): void {
  }

}
