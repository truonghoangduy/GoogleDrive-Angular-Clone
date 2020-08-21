import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileFormatComponent } from './components/file-format/file-format.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { ThumbnailsHeadComponent } from './components/thumbnails-head/thumbnails-head.component';
import { RenderTestComponent } from './components/render-test/render-test.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: "file-foler",
    component: FileFormatComponent,
  },
  {
    path: "thumbnails",
    component: ThumbnailsComponent,
  },
  {
    path: "thumbnails-Head",
    component: ThumbnailsHeadComponent,
  },
  {
    path: 'sign-in',
    component:SignInComponent
  },

  { path: 'main-screen', loadChildren: () => import('./pages/main-screen/main-screen.module').then(m => m.MainScreenModule) },
  { path: 'share-page', loadChildren: () => import('./pages/share-page/share-page.module').then(m => m.SharePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
