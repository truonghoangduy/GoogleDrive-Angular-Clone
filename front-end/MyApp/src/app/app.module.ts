import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { ComponentsModule} from './compoments/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { DriveModule } from './pages/drive/drive.module';

import {AuthService} from './services/auth.service'

import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import{AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFirestore} from '@angular/fire/firestore'
import { AngularBreadcrumbsLightModule } from 'angular-breadcrumbs-light';
import {RestoreDialogComponent} from './compoments/restore-dialog/restore-dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    RestoreDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    UiModule,
    ComponentsModule,
    NgbModule,
    DriveModule,
    AngularBreadcrumbsLightModule,
    
    
   
  ],
  providers: [AuthService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
