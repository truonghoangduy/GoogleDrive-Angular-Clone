import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriveComponent } from './drive.component';
import { AuthGruadService } from 'src/app/services/auth-gruad/auth-gruad.service';

const routes: Routes = [{
  path: '', component: DriveComponent,
  //drive/ ->>
  children: [
    { path: 'main-screen/:id',loadChildren: () => import('../main-screen/main-screen.module').then(m => m.MainScreenModule)},
    { path: 'main-screen',loadChildren: () => import('../main-screen/main-screen.module').then(m => m.MainScreenModule)},
    { path: 'share-page', loadChildren: () => import('../share-page/share-page.module').then(m => m.SharePageModule) },
    { path: 'recent-page', loadChildren: () => import('../recent-page/recent-page.module').then(m => m.RecentPageModule) },
    { path: 'pin-page', loadChildren: () => import('../pin-page/pin-page.module').then(m => m.PinPageModule) },
    { path: 'recycle-page', loadChildren: () => import('../recycle-page/recycle-page.module').then(m => m.RecyclePageModule) },]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveRoutingModule { }
