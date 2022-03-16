import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UtilityModule } from '../utility/utility.module';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  
  ],
  imports: [
    CommonModule,
    UtilityModule
  ],
  exports:[LoginComponent,SignupComponent]
})
export class AccountsModule { }
