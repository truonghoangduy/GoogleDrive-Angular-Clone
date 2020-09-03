import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { RegistrationPageComponent } from './registration-page.component';
import { UiModule } from 'src/app/ui/ui.module';
import { ComponentsModule } from 'src/app/compoments/components.module';


@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    UiModule,
    ComponentsModule,
  ]
})
export class RegistrationPageModule { }
