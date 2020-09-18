import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecyclePageRoutingModule } from './recycle-page-routing.module';
import { RecyclePageComponent } from './recycle-page.component';
import { UiModule } from 'src/app/ui/ui.module';
import { ComponentsModule } from 'src/app/compoments/components.module';


@NgModule({
  declarations: [RecyclePageComponent],
  imports: [
    CommonModule,
    RecyclePageRoutingModule,
    UiModule,
    ComponentsModule,
  ]
})
export class RecyclePageModule { }
