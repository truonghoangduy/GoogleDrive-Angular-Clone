import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FolderService } from '../../services/folder.service';
import { Folder } from 'src/app/models/folder.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  clients="/drive/folder-format"
  // db :Array<Folder>=[];
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  files: Array<String>;
  folders: Array<String>;
  contextMenuPosition = { x: '0px', y: '0px' };

  constructor(public folerService: FolderService,
    public apiServices:ApiService,
    private authServices:AuthService,
    public breadCrumbServices: BreadcrumbService) {
    this.breadCrumbServices.currentViewFolder.subscribe((data) => {
      console.log("Change"),
        console.log(data)
      this.files = [...data.files],
      this.folders = [...data.folders]
    })
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

  async onDelete(path: string) {
    console.log(path)
    await this.apiServices.removeFolder(path);
    await this.breadCrumbServices.refreshAfterAction();
  }
}
