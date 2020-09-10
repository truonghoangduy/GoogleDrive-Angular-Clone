import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BinServicesService } from 'src/app/services/binpage/bin-services.service';
import { BinInfo, BinModel } from 'src/app/models/bin.model';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import {RestoreDialogComponent} from '../../compoments/restore-dialog/restore-dialog.component'
@Component({
  selector: 'app-recycle-page',
  templateUrl: './recycle-page.component.html',
  styleUrls: ['./recycle-page.component.scss']
})
export class RecyclePageComponent implements OnInit {

  binListFromAPI:Array<Array<BinInfo>>;

  binSortedWithCommonPath:Array<number>;
  files: Array<Array<BinInfo>>;
  folders:Array<Array<BinInfo>>;
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  constructor(private apiServices:ApiService,private recoverDialog:MatDialog,public binServices:BinServicesService) {
    this.binServices.currentViewBin.subscribe((data)=>{
      this.files =[...data.files.filter(bin_1 => bin_1 != undefined)]
      this.folders = [...data.folders.filter(bin_1 => bin_1 != undefined)]
      console.log(this.files)
      console.log(this.folders)
    })
   }

  ngOnInit(): void {
    this.binServices.getBinList();

  }

  async onRemove(listOfVersion:Array<BinInfo>){
    await this.apiServices.removeFromBin(listOfVersion);
    return await this.binServices.getBinList();
  }




  onContextMenu(event: MouseEvent, items:Array<BinInfo>) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {
      'item': {
        listOfVersion:items
        // path: this.breadCrumbServices.currentPath + "/" + item
      }
    };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  onFolderClick(folderName: string) {
    // console.log(this.breadCrumbServices.currentPath + folderName);
    // this.breadCrumbServices.requestPath(this.breadCrumbServices.currentPath + "/" + folderName)

  }
  onContextMenuAction(item) {
    console.log(item)
  }

  async onDowload(path: string){
    await this.apiServices.dowloadFile(path);

  }

  async onDelete(path: string) {
    console.log(path)
    await this.apiServices.removeFolder(path);
    // await this.breadCrumbServices.refreshAfterAction();
  }

  async recoverMenu(listOfVersion:Array<BinInfo>){
    let recoverDialogRef = this.recoverDialog.open(RestoreDialogComponent,{
      data:listOfVersion
    });
    recoverDialogRef.afterClosed().subscribe(async (respone)=>{
      if (respone != null) {
        console.log("HEllo NIHAOMA")
        let request = await this.apiServices.reStore(respone);
        console.log("REQUESTING....")
        console.log(JSON.stringify(request));
        console.log(typeof(request))
        if (request != null) {
          console.log(request)
          await this.binServices.getBinList()
        }
      }
    })
  }



}
