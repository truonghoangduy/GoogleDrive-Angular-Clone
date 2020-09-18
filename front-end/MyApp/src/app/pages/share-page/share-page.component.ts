import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';
export interface ShareListModel{
  path:string,
  id:string,
  owner:string
}
@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss']
})
export class SharePageComponent implements OnInit {

  files: Array<String>;
  folders: Array<String>;
  constructor(private apiServices: ApiService, public breadCrumbServices: BreadcrumbService) {
    // this.breadCrumbServices.currentViewFolder.subscribe((data) => {
    //   console.log("Change"),
    //     console.log(data)
    //   this.files = [...data.files],
    //     this.folders = [...data.folders]
    // })
  }

  ngOnInit(): void {
    this.breadCrumbServices.clearnBreadCrum()
    this.apiServices.getShareList().then((value) => {

      this.files = value.map(doc=>{
        let index = doc.path.split("/");
        let isFile = index[index.length-1];
        if (isFile.includes(".")) {
          return isFile
        }
      }),
      this.folders = value.map(doc=>{
        let index = doc.path.split("/");
        let isFile = index[index.length-1];
        if (!isFile.includes(".")) {
          return isFile
        }
      })
    })
  }

  getter() {
    // this.breadCrumServices.requestPath()
  }




}
