import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainScreenRoutingModule } from './main-screen-routing.module';
import { MainScreenComponent } from './main-screen.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


import {FolderUiModule} from '../../modules/folder-ui/folder-ui.module'


@NgModule({
  declarations: [MainScreenComponent,],
  imports: [
    CommonModule,
    MainScreenRoutingModule,
    MatIconModule,
    FolderUiModule,
    MatDividerModule,
  ]
})
export class MainScreenModule { }
