import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FileFormatComponent} from '../../components/file-format/file-format.component';
import {ThumbnailsComponent} from '../../components/thumbnails/thumbnails.component';
import {ThumbnailsHeadComponent} from '../../components/thumbnails-head/thumbnails-head.component';

import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [FileFormatComponent , ThumbnailsComponent, ThumbnailsHeadComponent, ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,


  ],
  exports: [
    FileFormatComponent,
    ThumbnailsComponent,
    ThumbnailsHeadComponent
  ]
})
export class FolderUiModule { }
