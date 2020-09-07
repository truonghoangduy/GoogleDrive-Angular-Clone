import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import {BreadcrumbItem} from './breadcrumb'
import { AuthService } from '../../services/auth.service';

import { Folder } from 'src/app/models/folder.model';

import { BreadcrumbsService } from 'angular-breadcrumbs-light';
import routes from './routes';
import { from } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit,DoCheck {

  constructor(public auth:AuthService,public breadcrumbs:BreadcrumbsService) { }

  @Input()
  items:Array<BreadcrumbItem> = new Array<BreadcrumbItem>();
  folder:Array<Folder> = new Array<Folder>();
  @Output()
  clickItem: EventEmitter<BreadcrumbItem> = new EventEmitter<BreadcrumbItem>();




//   ngOnInit(): void {
//     this.items.push({
//       displayName:"Root-folder",
//     })
//     this.items.push({
//       displayName:"Demo1",
//     })
//   }

//   public onClickItem(item:BreadcrumbItem){
//     let startIndex = this.items.findIndex((i)=>i.id == item.id);
//     if(startIndex != -1 && startIndex< this.items.length){
//        this.items.splice(startIndex+1,this.items.length-startIndex-1);
//        this.clickItem.emit(item);
//     }
// =======


//   @Input()
//   items:Array<BreadcrumItem> = new Array<BreadcrumItem>();
//   folder:Array<Folder> = new Array<Folder>();
//   @Output()
//   clickItem: EventEmitter<BreadcrumItem> = new EventEmitter<BreadcrumItem>();
//   ngOnInit(): void {
//   
//   public onClickItem(item:BreadcrumItem){
//     let startIndex = this.items.findIndex((i)=>i.id == item.id);
//     if(startIndex != -1 && startIndex< this.items.length){
//        this.items.splice(startIndex+1,this.items.length-startIndex-1);
//        this.clickItem.emit(item);
//     }
// }
private location: string;
public crumbs: any;


public ngOnInit() {
  // Get first crumbs
  this.updateCrumbs();
  this.ngDoCheck();
}

public ngDoCheck() {
  if (this.location !== window.location.pathname)
    this.updateCrumbs();
}


private updateCrumbs() {
  // Get current location
  this.location = window.location.pathname;

  // Get crumbs for this location
  this.crumbs = this.breadcrumbs.getBreadcrumbs(routes, this.location);
}

}