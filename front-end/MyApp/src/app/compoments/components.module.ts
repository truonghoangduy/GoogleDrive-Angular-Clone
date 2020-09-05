import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../ui/ui.module';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { FolderComponent } from './folder/folder.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';
// import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarContentComponent,
    SideBarComponent,
    SignInComponent,
    SignUpComponent,
    ThumbnailComponent,
    FolderComponent,
    BreadcrumbComponent,
    DialogComponent,
    DialogSearchComponent,
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
    ThumbnailComponent,
    FolderComponent,
    BreadcrumbComponent,
  ]
})
export class ComponentsModule { }
