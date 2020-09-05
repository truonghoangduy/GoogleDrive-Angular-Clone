import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../ui/ui.module';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import {  } from './login-tab/login-tab.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DropzoneDirective } from './dropzone.directive';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { FolderComponent } from './folder/folder.component';
<<<<<<< HEAD
// <<<<<<< master
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';
// =======
// import { MThumbnailComponent } from './m-thumbnail/m-thumbnail.component';
// import { BreadcrumComponent } from './breadcrumb/breadcrumb.component';
// import { DialogComponent } from './dialog/dialog.component';
=======
>>>>>>> 40b6e065a4457bb5757d81f8f0230896e27e7ed3

import {  BreadcrumComponent} from './breadcrumb/breadcrumb.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';


import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarContentComponent,
    SideBarComponent,
    SignInComponent,
    SignUpComponent,
    // LoginTabComponent,
    UploadTaskComponent,
    UploaderComponent,
    DropzoneDirective,
    ThumbnailComponent,
    FolderComponent,

    BreadcrumComponent,
    DialogComponent,
    DialogSearchComponent,


  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule
  
  ],
  exports:[
    NavBarComponent,
    SideBarContentComponent,
    SideBarComponent,
    SignInComponent,
    SignUpComponent,
    // LoginTabComponent,
    UploadTaskComponent,
    UploaderComponent,
    ThumbnailComponent,
    FolderComponent,
// <<<<<<< master
//     BreadcrumbComponent,
// =======
//     MThumbnailComponent,
//     BreadcrumComponent,
// >>>>>>> master
  ]
})
export class ComponentsModule { }
