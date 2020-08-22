import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Iicon} from '../../models/list.model'

import { BreadcrumItem } from '../breadcrum/breadcrum-item';
import { CreateFolderDialogComponent } from '../dialog/create-folder-dialog/create-folder-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { NewFolderComponent } from '../new-folder/new-folder.component';
import { UploadComponent } from '../uploader/uploader.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  @Output() navigateTo:EventEmitter<string> = new EventEmitter<string>();

  listOfIcon:Array<Iicon>=[
    {
      title:'U-Space',
      icon: 'perm_media',
      url: 'main-screen',
    },
    {
      title:'Recent',
      icon: 'history',
      url: 'recent-page'
    },
    {
      title:'Share',
      icon: 'folder_shared',
      url: 'share-page',
    },
    {
      title:'Pin',
      icon: 'push_pin',
      url: 'pin-page',
    },
    {
      title:'Recycle Bin',
      icon: 'delete',
      url: 'recycle-page',
    },

  ];


  constructor(
    public auth:AuthService,
    private router: Router,
    private dialog: MatDialog,
    ) { }


  openNewFolderDialog() {
    const dialogRef = this.dialog.open(NewFolderComponent);
  }

  openUploadDialog(){
    const dialogRef = this.dialog.open(UploadComponent);
  }

  // public findItem(id:string):Iicon{
  //   var matchItem:Iicon;
  //     for (let item of this.listOfIcon) {
  //       if (item.url == id) {
  //         matchItem = item;
  //       }
  //     }
  //     return matchItem;
  //   }

  public navigateToPage(url:string){
    // this.router.navigate([url])
    this.navigateTo.emit(url);
  }


  public dir:Array<BreadcrumItem> = [
    {id:"home", displayName:"Home",data:{}},
    {id:"demo01", displayName:"Demo 01"}
  ];
  public clickDir(item){
    console.log(item);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFolderDialogComponent, {
      width: '250px',
      data: {name: "",}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      // this.animal = result;
    });
  }



  ngOnInit(): void {
  }

}

