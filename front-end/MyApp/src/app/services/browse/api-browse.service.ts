import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { ViewCurrentFolder } from "../../models/view.model";
import { map } from 'rxjs/operators';
const BROWSE_ENDPOINT = 'browse';
const API_GET_SHARE_LIST ='renderShare'

@Injectable({
  providedIn: 'root'
})

export class ApiBrowseService {



  // currentViewFolder:BehaviorSubject<ViewCurrentFolder>; // Cai minh muon xem files folder


  constructor(private http:HttpClient) { 

  }

  // getFolder(moveto:string){
  //   this.http.post<ViewCurrentFolder>(environment.endpoint + BROWSE_ENDPOINT,{
  //     currentDirectory:moveto,
  //   }).pipe(map(viewFoler=>{
  //     this.currentViewFolder.next(viewFoler)
  //   }))

  // }

  async getFolderV2(moveto:string){
    return await this.http.post<ViewCurrentFolder>(environment.endpoint + BROWSE_ENDPOINT,{
      currentDirectory:moveto,
    }).toPromise()
  }
  async getFolderForShareList(pathToShare:string,pathOwner,acesstor){
    return await this.http.post<ViewCurrentFolder>(environment.endpoint + BROWSE_ENDPOINT,{
      pathUUID:pathToShare,
      owner:pathOwner,
      shareUUID:acesstor
    }).toPromise()
  }

}
