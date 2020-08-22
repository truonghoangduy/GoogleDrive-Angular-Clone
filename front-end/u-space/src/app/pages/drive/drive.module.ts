import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriveRoutingModule } from './drive-routing.module';
import { DriveComponent } from './drive.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FolderUiModule } from 'src/app/modules/folder-ui/folder-ui.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavUIModule } from 'src/app/modules/nav-ui/nav-ui.module';


@NgModule({
  declarations: [DriveComponent],
  imports: [
    CommonModule,
    DriveRoutingModule,
    MatSidenavModule,
    MatIconModule,
    FolderUiModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    NavUIModule
  ]
})
export class DriveModule { }
