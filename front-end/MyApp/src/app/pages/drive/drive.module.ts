import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriveRoutingModule } from './drive-routing.module';
import { DriveComponent } from './drive.component';
import {UiModule} from '../../ui/ui.module';
import { ComponentsModule } from 'src/app/compoments/components.module';


@NgModule({
  declarations: [DriveComponent],
  imports: [
    CommonModule,
    DriveRoutingModule,
    UiModule,
    ComponentsModule,
  ]
})
export class DriveModule { }
