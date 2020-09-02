import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../ui/ui.module';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginTabComponent } from './login-tab/login-tab.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DropzoneDirective } from './dropzone.directive';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarContentComponent,
    SideBarComponent,
    SignInComponent,
    SignUpComponent,
    LoginTabComponent,
    UploadTaskComponent,
    UploaderComponent,
    DropzoneDirective,
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
    SignUpComponent,
    LoginTabComponent,
    UploadTaskComponent,
    UploaderComponent,
  ]
})
export class ComponentsModule { }
