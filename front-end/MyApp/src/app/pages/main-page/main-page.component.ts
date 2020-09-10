import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FolderService } from '../../services/folder.service';
import { Folder } from 'src/app/models/folder.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogshareComponent } from '../../compoments/dialogshare/dialogshare.component';
import { DialogrenameComponent } from 'src/app/compoments/dialogrename/dialogrename.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  clients="/drive/folder-format"
  // db :Array<Folder>=[];
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  @ViewChild(MatMenuTrigger) contextMenuCenterPaste: MatMenuTrigger;

  files: Array<String>;
  folders: Array<String>;
  contextMenuPosition = { x: '0px', y: '0px' };
  subscriptionbreadCrumbServices:Subscription
  constructor(public folerService: FolderService,
    public apiServices:ApiService,
    private authServices:AuthService,
    public breadCrumbServices: BreadcrumbService,public dialog:MatDialog) {
      this.subscriptionbreadCrumbServices = this.breadCrumbServices.currentViewFolder.subscribe((data) => {
          console.log("Change"),
            console.log(data)
          this.files = [...data.files],
            this.folders = [...data.folders]
        })
    
  }
  ngOnDestroy() {
    console.log("DROP")
    this.subscriptionbreadCrumbServices.unsubscribe()
  }
  

  screenWidth: number;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.getScreenSize();
    this.breadCrumbServices.clearnBreadCrum();
    this.breadCrumbServices.requestPath(this.authServices.user.email) // UUID of someone

  }

  onContextMenu(event: MouseEvent, item) {
    console.log("onContextMenu")
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {
      'item': {
        name: item,
        path: this.breadCrumbServices.currentPath + "/" + item
      }
    };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  onContextMenuCenter(event: MouseEvent) {
    event.preventDefault();
    console.log('onContextMenuCenter')
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenuCenterPaste.menuData = {
      'item': {
        path: this.breadCrumbServices.currentPath
      }
    };
    this.contextMenuCenterPaste.menu.focusFirstItem('mouse');
    this.contextMenuCenterPaste.openMenu();
  }

  onOpenDialogShare(){
    this.dialog.open(DialogshareComponent);
  }
  onOpenDialogRename(folderName:string){
    // console.log(folderName)
    let renameDialogRef = this.dialog.open(DialogrenameComponent);
    renameDialogRef.afterClosed().subscribe(async (newName:string)=>{
      let updatedName = folderName.split("/")
      updatedName.pop()
      if (newName != null) {
        let newname = ([...updatedName,newName]).join('/')
        await this.apiServices.rename(folderName,newname)
        this.breadCrumbServices.refreshAfterAction()
      }else{
        console.log("DO NOTHINGS ON RENAME DIALGO")
      }
    })
  }

  onFolderClick(folderName: string) {
    // console.log(this.breadCrumbServices.currentPath + folderName);
    this.breadCrumbServices.requestPath(this.breadCrumbServices.currentPath + "/" + folderName)

  }
  onContextMenuAction(item) {
    console.log(item)
  }

  async onDowload(path: string){
    await this.apiServices.dowloadFile(path);

  }
  clickMove= false;

   copedPath = ""
  move(name:string){
    this.clickMove = true;
    this.clickCopy= false;
    this.copedPath = name
    console.log(this.copedPath)
  }
  clickCopy= false;
  copy(name:string){
    this.clickCopy= true;
    this.clickMove= false;
    this.copedPath = name
    console.log(this.copedPath)
  }
  async onPaste(name:string){
    let res = name
    // res = res + '/' +name
    console.log({
      head:this.copedPath,
      tail:res
    })
    console.log(res)
    // console.log("where paster"+res,"from"+ this.move());/
    // this.onMove(this.move(),res);
    
   await this.onMove(this.copedPath,res)
  }
  // check(){
  //   if()
  // }
  async onPasteCopy(name:string){
    let res = name
    // res = res + '/' +name
    console.log({
      head:this.copedPath,
      tail:res
    })
    console.log(res)
  
   await this.onCopy(this.copedPath,res)
  }
 
  async onCopy(path:string,url:string){
    await this.apiServices.copy(path,url);
    return await this.breadCrumbServices.refreshAfterAction();

  }
  async onMove(path:string,url:string){

    await this.apiServices.move(path,url);
    return await this.breadCrumbServices.refreshAfterAction();

  }

  async onDelete(path: string) {
    console.log(path)
    await this.apiServices.removeFolder(path);
    return await this.breadCrumbServices.refreshAfterAction();
  }
}
