import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent

import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileFormatComponent } from './components/file-format/file-format.component';


import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import {MatCardModule} from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// FireBase Section

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FileFormatComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatIconModule,


    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    ThumbnailsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
