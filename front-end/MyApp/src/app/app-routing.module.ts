import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './compoments/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'drive', loadChildren: () => import('./pages/drive/drive.module').then(m => m.DriveModule) }, 
  {path:'',component:SignInComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
