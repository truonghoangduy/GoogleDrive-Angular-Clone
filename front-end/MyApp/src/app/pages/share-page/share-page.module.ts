import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharePageRoutingModule } from './share-page-routing.module';
import { SharePageComponent } from './share-page.component';
import { UiModule } from 'src/app/ui/ui.module';
import { ComponentsModule } from 'src/app/compoments/components.module';


@NgModule({
  declarations: [SharePageComponent],
  imports: [
    CommonModule,
    SharePageRoutingModule,
    UiModule,
    ComponentsModule,
  ]
})
export class SharePageModule { }
