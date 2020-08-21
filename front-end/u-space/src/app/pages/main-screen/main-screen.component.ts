import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Folder } from 'src/app/models/folder.model';

import {DataService} from '../../services/data/data.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription, fromEvent } from 'rxjs';
import { filter,take } from 'rxjs/operators'; 
import { ContextMenuComponent } from 'ngx-contextmenu';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  
  db = [];
  db_1 = [];
  db_2 = [];
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  constructor(private dataService: DataService,    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.db = this.dataService.getDataBase1();
    this.db_1 = this.dataService.getDataBase2();
    this.db_2 = this.dataService.getDataBase2();
  }

  
  onContextMenu(event: MouseEvent, item) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }
  onContextMenuAction(item){
    console.log(item)
  }




}
