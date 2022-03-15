import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormControl, FormControlName, FormGroupDirective } from '@angular/forms';
import { InputFieldBaseComponent } from '../input-field-base/input-field-base.component';
import { InputFieldPasswordComponent } from '../input-field-password/input-field-password.component';
import { InputField } from '../interfaces/input-field';

@Component({
  selector: 'app-input-field-text',
  template: `<div  [attr.data-type]='type' class="input-field-container  flex flex-direction-column">

  <label class="caption-large">{{input.label}}</label>
  <div class="input_field_wrapper flex justify-content-center align-items-center">
      <input type="email" placeholder="{{input.placeholder}}" formControlName='{{input.formControlName}}' class="input_field body-regular">
    <!--       icon is put after input element to access element in css with sibling selector -->  
    <i-feather class="input_field_icon" name="{{input.icon}}"></i-feather>
    </div>
    <div class="hint_box flex flex justify-content-center align-items-center">
            <span #captionIcon></span>&nbsp;&nbsp;&nbsp;
            <span class="caption-large caption-text">{{caption.message}} </span>
          </div>
</div> `,
  styleUrls: ['../input-field-base/input-field-base.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputFieldTextComponent extends InputFieldBaseComponent implements OnInit {

  constructor() {
    super();
  }
  override ngOnInit(): void {
  }

}
