import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';


@Component({
  selector: 'app-dialogrename',
  templateUrl: './dialogrename.component.html',
  styleUrls: ['./dialogrename.component.scss']
})
export class DialogrenameComponent implements OnInit {


  constructor(public http: HttpClient, public api: ApiService, public breadCrumbServices: BreadcrumbService) { }
  new = '';
  old='';
  ngOnInit(): void {
  }
  // async onShare() {
  //   await this.api.share(this.receiver, this.breadCrumbServices.currentPath, "enable");
  //   return await this.breadCrumbServices.refreshAfterAction();
  // }
  // async onDisShare() {
  //   await this.api.share(this.receiver, this.breadCrumbServices.currentPath, "disable");
  //   return await this.breadCrumbServices.refreshAfterAction();
  // }
  async onRename(newName:string){
    let oldname=this.breadCrumbServices.currentPath;
    let path= oldname.split("/");
    let deloldname= path.pop();
    let newpath=path.join("/");
    await this.api.rename(oldname,newpath+"/"+newName);
    return await this.breadCrumbServices.refreshAfterAction();
  }
}
