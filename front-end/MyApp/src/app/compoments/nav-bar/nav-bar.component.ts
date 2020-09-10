import {Component, OnInit,ViewChild, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HostListener } from "@angular/core";
import { FolderService } from 'src/app/services/folder.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogSearchComponent} from '../dialog-search/dialog-search.component';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(public authService:AuthService,
    public folderService:FolderService,
    public breadCrumbServices:BreadcrumbService,
    public dialog: MatDialog){}
  screenWidth:number;
  clearIcon = false;
  txtSearch='';
   @Output() onShowMenu = new EventEmitter<any>();
  showMenu(){
    this.onShowMenu.emit();
  }

  clear(){
    this.txtSearch = '';
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
        // console.log( this.screenWidth);
  } 
   ngOnInit(): void {
    this.getScreenSize();
  }
  openDialog1() {
    this.dialog.open(DialogSearchComponent);
  }
  openDialog() {

    this.dialog.open(DialogComponent);
  }
  
}
//ádsa


