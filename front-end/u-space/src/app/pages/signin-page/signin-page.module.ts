import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninPageRoutingModule } from './signin-page-routing.module';
import { SigninPageComponent } from './signin-page.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SigninPageComponent,SignInComponent],
  imports: [
    CommonModule,
    SigninPageRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SigninPageModule { }
