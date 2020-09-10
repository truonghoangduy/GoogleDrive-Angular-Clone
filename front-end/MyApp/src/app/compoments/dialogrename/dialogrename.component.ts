import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogrename',
  templateUrl: './dialogrename.component.html',
  styleUrls: ['./dialogrename.component.scss']
})
export class DialogrenameComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) 
  public data,public http: HttpClient, 
  public api: ApiService, 
  public breadCrumbServices: BreadcrumbService,
  public dialogRef: MatDialogRef<DialogrenameComponent>) { }

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
    // let oldname=this.breadCrumbServices.currentPath;
    // let path= oldname.split("/");
    // let deloldname= path.pop();
    // let newpath=path.join("/");
    // await this.api.rename(oldname,newpath+"/"+newName);
    // return await this.breadCrumbServices.refreshAfterAction();
    if (newName != "") {
      this.dialogRef.close(newName);
    }else{
      this.dialogRef.close(null);
    }
  }
}
