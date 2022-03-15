import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule, } from 'angular-feather';
import {allIcons} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
allIcons};

@NgModule({
  imports: [
    FeatherModule.pick(allIcons)
  ],
  exports: [
    FeatherModule
  ]
})
export class FeatherIconsModule {
  
 }
