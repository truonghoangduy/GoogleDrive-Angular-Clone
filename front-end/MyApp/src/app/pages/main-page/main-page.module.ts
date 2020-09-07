import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { UiModule } from 'src/app/ui/ui.module';
import { ComponentsModule } from 'src/app/compoments/components.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    UiModule,
    ComponentsModule,
  ]
})
export class MainPageModule { }
