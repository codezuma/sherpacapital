import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, }from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/form-components/forms/login-form/login-form.component';
import { InputFieldTextComponent } from './components/form-components/input-fields/input-field-text/input-field-text.component';
import { AuthFormsComponent } from './components/form-components/forms/auth-forms/auth-forms.component';
import { SignupFormComponent } from './components/form-components/forms/signup-form/signup-form.component';
import { FeatherModule } from 'angular-feather';
import { FeatherIconsModule } from './modules/feather-icons/feather-icons.module';
import { InputFieldPasswordComponent } from './components/form-components/input-fields/input-field-password/input-field-password.component';
import { InputFieldBaseComponent } from './components/form-components/input-fields/input-field-base/input-field-base.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    InputFieldTextComponent,
    AuthFormsComponent,
    SignupFormComponent,
    InputFieldPasswordComponent,
    InputFieldBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FeatherModule,
    FeatherIconsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
