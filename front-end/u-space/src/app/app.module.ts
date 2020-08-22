import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

// FireBase Section

import { environment } from 'src/environments/environment';

import { FolderUiModule } from './modules/folder-ui/folder-ui.module';
import {MatDividerModule} from '@angular/material/divider';
import { ThumbnailsHeadComponent } from './components/thumbnails-head/thumbnails-head.component';
import { BySOComponent } from './components/share-file/by-so/by-so.component';
// import { ListShareComponent } from './components/share-file/list-share/list-share.component';

import {  AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RenderTestComponent } from './components/render-test/render-test.component';
import { NewFolderComponent } from './components/new-folder/new-folder.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FileFormatComponent } from './components/file-format/file-format.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { FileActionDialogComponent } from './components/file-action-dialog/file-action-dialog.component';
import {UploadComponent} from '../app/components/uploader/uploader.component'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CreateFolderDialogComponent } from './components/dialog/create-folder-dialog/create-folder-dialog.component';
// import {NavUIModule} from '../app/modules/nav-ui/nav-ui.module'
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { FolderFormatComponent } from './components/folder-format/folder-format.component';




@NgModule({
  declarations: [
    AppComponent,
    BySOComponent,
    RenderTestComponent,
    // ListShareComponent,
    // ListShareComponent,/
    // BreadcrumComponent,
    // ListShareComponent,
    NewFolderComponent,
    FileActionDialogComponent,
    UploadComponent,
    // FileFormatComponent,

    FolderFormatComponent,

  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    // FolderUiModule,
    // NavUIModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    MatExpansionModule,
    MatProgressBarModule,

    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
