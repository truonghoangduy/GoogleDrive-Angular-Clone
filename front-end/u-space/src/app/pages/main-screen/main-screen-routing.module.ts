import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainScreenComponent } from './main-screen.component';

const routes: Routes = [{ path: '', component: MainScreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainScreenRoutingModule { }
