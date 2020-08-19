import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileFormatComponent } from './components/file-format/file-format.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';

const routes: Routes = [
  {path:"file-foler",
    component:FileFormatComponent,
  },
  {
    path:"thumbnails",
    component:ThumbnailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
