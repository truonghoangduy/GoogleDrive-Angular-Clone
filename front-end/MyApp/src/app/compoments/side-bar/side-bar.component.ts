import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from "../../services/api.service"
import { HttpClient } from '@angular/common/http'
import { AuthService } from 'src/app/services/auth.service';
import {BreadcrumbService} from '../../services/breadcrumb/breadcrumb.service'
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(public apiService: ApiService, public httpClient: HttpClient, public auth: AuthService,) {
  }
  userInfo = {
    displayName: "",
    photoUrl: "",
    email: "",
    uid: "",
    used: 0,
    packSize: 0
  }

  @Output() navigateTo = new EventEmitter<string>();
  navigate(path: string) {
    this.navigateTo.emit(path)
  }

  ngOnInit(): void {

  }
  // getSizeUsed(){
  //   let res = this.apiService.getUsedSize("D:/Repos/Demos/Angular/GoogleDrive-Angular/front-end/MyApp/node_modules");
  //   return res;
  // }
  public getSize() {

    return this.userInfo;
  }

}
