import { Component } from '@angular/core';
import { BreadcrumItem } from './components/breadcrum/breadcrum-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'u-space';
  public dir:Array<BreadcrumItem> = [
    {id:"home", displayName:"Home",data:{}},
    {id:"demo01", displayName:"Demo 01"}
  ];
  public clickDir(item){
    console.log(item);
  }
}