import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileFormatComponent } from './components/file-format/file-format.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { ThumbnailsHeadComponent } from './components/thumbnails-head/thumbnails-head.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NewFolderComponent } from './components/new-folder/new-folder.component';

const routes: Routes = [
  {path:"file-foler",
    component:FileFormatComponent,
  },
  {
    path:"thumbnails",
    component:ThumbnailsComponent,
  },
  {
    path:"thumbnails-Head",
    component:ThumbnailsHeadComponent,
  },
  {
    path: '',
    component:SignInComponent
  },
  {
    path: '',
    component:NewFolderComponent,
  },

  { path: 'main-screen/:id?', loadChildren: () => import('./pages/main-screen/main-screen.module').then(m => m.MainScreenModule) },
  { path: 'share-page', loadChildren: () => import('./pages/share-page/share-page.module').then(m => m.SharePageModule) },
  { path: 'recent-page', loadChildren: () => import('./pages/recent-page/recent-page.module').then(m => m.RecentPageModule) },
  { path: 'pin-page', loadChildren: () => import('./pages/pin-page/pin-page.module').then(m => m.PinPageModule) },
  { path: 'recycle-page', loadChildren: () => import('./pages/recycle-page/recycle-page.module').then(m => m.RecyclePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
