import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormsComponent } from './components/form-components/forms/auth-forms/auth-forms.component';
import { LoginFormComponent } from './components/form-components/forms/login-form/login-form.component';
import { SignupFormComponent } from './components/form-components/forms/signup-form/signup-form.component';
import { AuthFormsRoutingModule } from './modules/auth-forms/auth-forms-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'auth',pathMatch:'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth-forms/auth-forms.module').then((m) => m.AuthFormsModule),
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
