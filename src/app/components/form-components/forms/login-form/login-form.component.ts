import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlName,FormBuilder, FormGroup } from '@angular/forms';
import { InputField } from '../../input-fields/interfaces/input-field';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../signup-form/signup-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor( public formBuilder:FormBuilder) {
   }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  });

  emailInput:InputField =  {
    placeholder:"",
    defaultValue:'',
    label:'Email',
    icon:'Mail',
    formControlName:'email'
  };
  passwordInput:InputField = {
    formControlName:'password',
    placeholder:' ',  
    icon:'Lock',
    defaultValue:'',
    label:'Password '
  }
  @ViewChild('submit_button') submitButton!:ElementRef;
  printValues():void{
  }
}
