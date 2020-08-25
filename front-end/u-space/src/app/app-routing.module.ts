import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileFormatComponent } from './components/file-format/file-format.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { ThumbnailsHeadComponent } from './components/thumbnails-head/thumbnails-head.component';
import { RenderTestComponent } from './components/render-test/render-test.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AuthGruadService} from './services/auth-gruad/auth-gruad.service'
import { NewFolderComponent } from './components/new-folder/new-folder.component';
import { FolderFormatComponent } from './components/folder-format/folder-format.component';

const routes: Routes = [
  // {
  //   path: "file-foler",
  //   component: FileFormatComponent,
  // },
  // {
  //   path: "thumbnails",
  //   component: ThumbnailsComponent,
  // },
  // {
  //   path: "thumbnails-Head",
  //   component: ThumbnailsHeadComponent,
  // },


  {
    path:'',
    // component:SignInComponent
    redirectTo:'drive',pathMatch: 'full'
  },
  { path: 'login', 
  loadChildren: () => import('./pages/signin-page/signin-page.module').then(m => m.SigninPageModule) },
  { path: 'drive', 
  canActivate:[AuthGruadService],
  loadChildren: () => import('./pages/drive/drive.module').then(m => m.DriveModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
