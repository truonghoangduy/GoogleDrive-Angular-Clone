import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharePageComponent } from './share-page.component';

const routes: Routes = [{ path: '', component: SharePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharePageRoutingModule { }
