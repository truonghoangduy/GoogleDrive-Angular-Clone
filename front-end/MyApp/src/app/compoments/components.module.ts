import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../ui/ui.module';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginTabComponent } from './login-tab/login-tab.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarContentComponent,
    SideBarComponent,
    SignInComponent,
    SignUpComponent,
    LoginTabComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
  ],
  exports:[
    NavBarComponent,
    SideBarContentComponent,
    SideBarComponent,
    SignInComponent,
  ]
})
export class ComponentsModule { }
