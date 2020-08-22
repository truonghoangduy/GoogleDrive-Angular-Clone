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
// import { FolderFormatComponent } from 'src/app/components/folder-format/folder-format.component';



@NgModule({
  declarations: [ThumbnailsComponent, ThumbnailsHeadComponent,FileFormatComponent,
                 ThumbnailsHeadComponent,
                //  FolderFormatComponent
                ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,


  ],
  exports: [
    ThumbnailsComponent,
    ThumbnailsHeadComponent,
    FileFormatComponent
    // FolderFormatComponent
  ]
})
export class FolderUiModule { }
