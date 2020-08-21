import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecyclePageRoutingModule } from './recycle-page-routing.module';
import { RecyclePageComponent } from './recycle-page.component';


@NgModule({
  declarations: [RecyclePageComponent],
  imports: [
    CommonModule,
    RecyclePageRoutingModule
  ]
})
export class RecyclePageModule { }
