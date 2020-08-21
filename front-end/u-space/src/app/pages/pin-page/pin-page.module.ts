import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinPageRoutingModule } from './pin-page-routing.module';
import { PinPageComponent } from './pin-page.component';


@NgModule({
  declarations: [PinPageComponent],
  imports: [
    CommonModule,
    PinPageRoutingModule
  ]
})
export class PinPageModule { }
