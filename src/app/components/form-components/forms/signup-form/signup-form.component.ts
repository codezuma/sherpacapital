import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputField } from '../../input-fields/interfaces/input-field';
import { InputFieldBaseComponent } from '../../input-fields/input-field-base/input-field-base.component';
import { InputFieldTextComponent } from '../../input-fields/input-field-text/input-field-text.component';
import { InputFieldPasswordComponent } from '../../input-fields/input-field-password/input-field-password.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }
  loginForm = this.formBuilder.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.minLength(6), Validators.required]],
  });

  emailInput: InputField = {
    placeholder: "",
    defaultValue: '',
    label: 'Email',
    icon: 'Mail',
    formControlName: 'email'
  };
  passwordInput: InputField = {
    formControlName: 'password',
    placeholder: ' ',
    icon: 'Lock',
    defaultValue: '',
    label: 'Password '
  }
  @ViewChild('emailFieldComponent') emailFieldComponent!: InputFieldBaseComponent ;
  @ViewChild('passwordFieldComponent') passwordFieldComponent!: InputFieldBaseComponent ;


  public printValues(): void {
    this.checkValidations();
  }
  private checkError(component:InputFieldBaseComponent,validators: { hasError: boolean, message: string }[]) {
    // checks all validation if anyone is false it show the error 
    console.log(validators);
   const error =  validators.find((ele) => {  return ele.hasError }) || null;
   
   if(error)
   component.showError(error.message);
   else
   component.showsuccess('');

  }
  private checkValidations(): void {

    //email validations 
    const email = this.loginForm.get('email')!;
    const emailValidators = [{ hasError: email.hasError('required'), message: 'Email field cannot be empty' }, { hasError: email.hasError('email'), message: 'Email format is incorrect' }];
    this.checkError(this.emailFieldComponent,emailValidators);

    
    //password validations 
    const password = this.loginForm.get('password')!;
    const passwordValidators = [{ hasError: password.hasError('required'), message: 'Password field cannot be empty' }, { hasError: password.hasError('minLength'), message: 'Minimum 6 characters required' }];
    this.checkError(this.passwordFieldComponent,passwordValidators);

  }


}
