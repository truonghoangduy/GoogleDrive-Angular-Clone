import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecyclePageComponent } from './recycle-page.component';

const routes: Routes = [{ path: '', component: RecyclePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecyclePageRoutingModule { }
