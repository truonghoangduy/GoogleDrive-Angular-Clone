import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';


@Component({
  selector: 'app-dialogshare',
  templateUrl: './dialogshare.component.html',
  styleUrls: ['./dialogshare.component.scss']
})
export class DialogshareComponent implements OnInit {

  constructor(public http:HttpClient, public api:ApiService,public breadCrumbServices:BreadcrumbService) { }
  receiver='';
  ngOnInit(): void {
  }
  async onShare(){
    await this.api.share(this.receiver,this.breadCrumbServices.currentPath,"enable");
    return await this.breadCrumbServices.refreshAfterAction();
  }
  async onDisShare(){
    await this.api.share(this.receiver,this.breadCrumbServices.currentPath,"disable");
    return await this.breadCrumbServices.refreshAfterAction();
  }
}
