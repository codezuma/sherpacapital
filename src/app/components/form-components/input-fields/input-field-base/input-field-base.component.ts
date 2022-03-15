import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { InputField } from '../interfaces/input-field';
import { allIcons } from 'angular-feather/icons';
import { icons } from 'feather-icons';
import { Icons } from 'angular-feather/lib/icons.provider';
import { IconsModule } from 'src/app/modules/feather-icons/icons/icons.module';
@Component({
  selector: 'app-input-field-base',
  template: ``,
})
export class InputFieldBaseComponent implements OnInit {

  constructor() { }
  @Input() input: InputField = {
    icon: '',
    placeholder: '', formControlName: "", label: '', defaultValue: ''
  };

  public type: 'none' | 'disabled' | 'success' | 'error' = 'none';

  public caption: { message: string, icon: string } = {
    message: '',
    icon: ''
  }
  @ViewChild('captionIcon') protected captionIcon!: ElementRef;
  public showError(message: string) {
    this.type = 'error';
    this.changeCaption(message, IconsModule.allIcons.alertTriangle);
  }
  public changeCaption(message: string, icon: string) {
    this.captionIcon.nativeElement.childNodes.forEach((ele: HTMLElement) => {
      ele.remove();
    });
    this.captionIcon.nativeElement.appendChild(IconsModule.iconToHTML(icon));
    this.captionIcon.nativeElement.classList.add('caption-text');
    this.captionIcon.nativeElement.firstChild.style.height = '14px';
    this.captionIcon.nativeElement.firstChild.style.width = '14px';
    this.caption.message = message;
  }
  public showsuccess(message: string = '') {
    this.type = 'success';
    this.changeCaption(message, IconsModule.allIcons.check);
  }
  ngOnInit(): void {
  }

}