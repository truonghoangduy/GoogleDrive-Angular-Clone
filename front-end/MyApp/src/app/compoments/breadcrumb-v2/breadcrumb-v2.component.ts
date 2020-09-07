import { Component, OnInit, Input, Output, EventEmitter, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import {ViewCurrentFolder, BreadCrumbState } from '../../models/view.model';
@Component({
  selector: 'app-breadcrumb-v2',
  templateUrl: './breadcrumb-v2.component.html',
  styleUrls: ['./breadcrumb-v2.component.scss'],
})
export class BreadcrumbV2Component implements OnInit {


  @Input()
  items:Array<ViewCurrentFolder> = new Array<ViewCurrentFolder>();

  @Output()
  clickItem: EventEmitter<BreadCrumbState> = new EventEmitter<BreadCrumbState>();


  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }

  getFolderName(item:ViewCurrentFolder){
    let folder = item.requestPath.split("/")
    return folder[folder.length-1];
  }

  public onClickItem(item:ViewCurrentFolder){
    let startIndex = this.items.findIndex((i)=>i.requestPath == item.requestPath);
    if(startIndex != -1 && startIndex< this.items.length){
       this.items.splice(startIndex+1,this.items.length-startIndex-1);
       this.clickItem.emit({
          choosenPathIndex:this.items.length,
         choosenPath:item
       });
      //  console.log(item)
      //  console.log(this.items.length-1)
    }
  }

}
