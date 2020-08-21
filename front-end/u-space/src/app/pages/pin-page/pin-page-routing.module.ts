import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinPageComponent } from './pin-page.component';

const routes: Routes = [{ path: '', component: PinPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinPageRoutingModule { }
