import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharePageRoutingModule } from './share-page-routing.module';
import { SharePageComponent } from './share-page.component';


@NgModule({
  declarations: [SharePageComponent],
  imports: [
    CommonModule,
    SharePageRoutingModule
  ]
})
export class SharePageModule { }
