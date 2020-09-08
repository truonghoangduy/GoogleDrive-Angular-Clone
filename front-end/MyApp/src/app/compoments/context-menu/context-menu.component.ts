import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent implements OnInit {
  @Input() data;
  contextMenuPosition = { x: '0px', y: '0px' };
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  constructor(public breadCrumbServices: BreadcrumbService) { }

  ngOnInit(): void {
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
    // this.breadCrumbServices.requestPath(this.breadCrumbServices.currentPath + "/" + folderName)

  }
  onContextMenuAction(item) {
    console.log(item)
  }

  async onDelete(path: string) {
    console.log(path)
    // await this.apiServices.removeFolder(path);
    // await this.breadCrumbServices.refreshAfterAction();
  }

}
