import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormsComponent } from 'src/app/components/form-components/forms/auth-forms/auth-forms.component';
import { LoginFormComponent } from 'src/app/components/form-components/forms/login-form/login-form.component';
import { SignupFormComponent } from 'src/app/components/form-components/forms/signup-form/signup-form.component';

const routes: Routes = [  
  { path: '',
  component: AuthFormsComponent,
  children: [
    {path:'',redirectTo:'login',pathMatch:'full'},
    { path: 'login', component: LoginFormComponent, data: {animation: 'loginPage'} },
    { path: 'signup', component: SignupFormComponent, data: {animation: 'signupPage'} },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthFormsRoutingModule { }
