import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { FeatherComponent } from 'angular-feather';
import { FeatherAttributes } from 'feather-icons';
import { InputFieldBaseComponent } from '../input-field-base/input-field-base.component';
import { InputField } from '../interfaces/input-field';

@Component({
  selector: 'app-input-field-password',
  template: `
  <div  [attr.data-type]='type' class="input-field-container  flex flex-direction-column">

          <label class="caption-large">{{input.label}}</label>

          <div class="input_field_wrapper flex justify-content-center align-items-center">
             <input aut #input_field type="password" placeholder="{{input.placeholder}}" formControlName='{{input.formControlName}}' class="input_field body-regular">
             <!--       icon is put after input element to access element in css with sibling selector -->   
             <i-feather class="input_field_icon" name="{{input.icon}}"></i-feather>
             <i-feather class="eye_icon input_field_icon " #hide_password_button (click)='hidePassword()' [style.display]='"none"' name="eye-off"></i-feather>
             <i-feather class="eye_icon input_field_icon " #show_password_button (click)='showPassword()' name="eye"></i-feather>
          </div>
          <div class="hint_box flex flex justify-content-center align-items-center">
            <span #captionIcon></span>&nbsp;&nbsp;&nbsp;
            <span class="caption-large caption-text">{{caption.message}} </span>
          </div>
   </div> 
`,
  styleUrls: ['../input-field-base/input-field-base.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputFieldPasswordComponent extends InputFieldBaseComponent implements OnInit {

  constructor() {
    super();
  }

  @ViewChild('input_field') inputField!: ElementRef;
  @ViewChild('show_password_button') eyeIcon!: any;
  @ViewChild('hide_password_button') eyeOffIcon!: any;

  public showPassword(): void {
    this.inputField.nativeElement.setAttribute('type', 'text');
    this.eyeIcon.elem.nativeElement.style.display = 'none';
    this.eyeOffIcon.elem.nativeElement.style.display = 'block';
  }
  public hidePassword(): void {
    this.inputField.nativeElement.setAttribute('type', 'password');
    this.eyeIcon.elem.nativeElement.style.display = 'block';
    this.eyeOffIcon.elem.nativeElement.style.display = 'none';
  }
}
