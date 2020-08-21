import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentPageComponent } from './recent-page.component';

const routes: Routes = [{ path: '', component: RecentPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentPageRoutingModule { }
