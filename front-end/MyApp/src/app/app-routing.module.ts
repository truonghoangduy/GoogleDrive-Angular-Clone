import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './compoments/sign-in/sign-in.component';
import { FolderComponent } from './compoments/folder/folder.component';

const routes: Routes = [
  { path: 'drive', loadChildren: () => import('./pages/drive/drive.module').then(m => m.DriveModule) }, 
  { path: '', loadChildren: () => import('./pages/registration-page/registration-page.module').then(m => m.RegistrationPageModule) },
  { path: '**', loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule) },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
