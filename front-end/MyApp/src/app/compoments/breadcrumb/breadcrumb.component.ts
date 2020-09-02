import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BreadcrumbItem} from './breadcrumb';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(public auth:AuthService) { }

  // @Input()
  items:Array<BreadcrumbItem> = new Array<BreadcrumbItem>();


  @Output()
  clickItem: EventEmitter<BreadcrumbItem> = new EventEmitter<BreadcrumbItem>();


  ngOnInit(): void {
    this.items.push({
      displayName:"abssssssc1",
    })
    this.items.push({
      displayName:"abc12",
    })
    this.items.push({
      displayName:"abc123",
    })
    this.items.push({
      displayName:"abc123",
    })
    this.items.push({
      displayName:"abc123",
    })
  }

  public onClickItem(item:BreadcrumbItem){
    let startIndex = this.items.findIndex((i)=>i.id == item.id);
    if(startIndex != -1 && startIndex< this.items.length){
       this.items.splice(startIndex+1,this.items.length-startIndex-1);
       this.clickItem.emit(item);
    }
}

}
