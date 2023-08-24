import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { ShareModule } from '../share/share.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent,
    SignoutComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
