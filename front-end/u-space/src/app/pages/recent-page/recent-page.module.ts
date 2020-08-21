import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentPageRoutingModule } from './recent-page-routing.module';
import { RecentPageComponent } from './recent-page.component';
import { MatIconModule } from '@angular/material/icon';
import {FolderUiModule} from '../../modules/folder-ui/folder-ui.module'


@NgModule({
  declarations: [RecentPageComponent],
  imports: [
    CommonModule,
    RecentPageRoutingModule,
    MatIconModule,
    FolderUiModule
  ]
})
export class RecentPageModule { }
