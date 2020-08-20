import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileFormatComponent } from './components/file-format/file-format.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { ThumbnailsHeadComponent } from './components/thumbnails-head/thumbnails-head.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
