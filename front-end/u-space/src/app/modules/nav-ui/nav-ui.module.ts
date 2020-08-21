import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { BreadcrumComponent } from 'src/app/components/breadcrum/breadcrum.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {NavbarComponent} from '../../components/navbar/navbar.component'

@NgModule({
  declarations: [SidebarComponent,BreadcrumComponent,NavbarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
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
    

  ],
  exports:[
    SidebarComponent,BreadcrumComponent,NavbarComponent
  ]
})

export class NavUIModule { }
