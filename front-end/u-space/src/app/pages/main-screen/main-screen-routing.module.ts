import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainScreenComponent } from './main-screen.component';

const routes: Routes = [{ path: '', component: MainScreenComponent,children:[
  { path: 'share-page', loadChildren: () => import('../share-page/share-page.module').then(m => m.SharePageModule) },
  { path: 'recent-page', loadChildren: () => import('../recent-page/recent-page.module').then(m => m.RecentPageModule) },
  { path: 'pin-page', loadChildren: () => import('../pin-page/pin-page.module').then(m => m.PinPageModule) },
  { path: 'recycle-page', loadChildren: () => import('../recycle-page/recycle-page.module').then(m => m.RecyclePageModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainScreenRoutingModule { }
