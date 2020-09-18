import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriveComponent } from './drive.component';
import {AuthGuardService} from '../../services/auth-guard.service'
import { FolderComponent } from 'src/app/compoments/folder/folder.component';
const routes: Routes = [{ path: '', component: DriveComponent ,
children:[
  { path: 'pin-page', loadChildren: () => import('../pin-page/pin-page.module').then(m => m.PinPageModule) },
  { path: 'share-page', loadChildren: () => import('../share-page/share-page.module').then(m => m.SharePageModule) },
  { path: 'recycle-page', loadChildren: () => import('../recycle-page/recycle-page.module').then(m => m.RecyclePageModule) },
  {path:'folder-format',component:FolderComponent},
  { path: 'main-page', 
  canActivate:[AuthGuardService],
  loadChildren: () => import('../main-page/main-page.module').then(m => m.MainPageModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveRoutingModule { }
